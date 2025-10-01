const Song = require("/Song.js");

exports.index = (req, res) => {
  Song.find()
    .then((allSongs) => {
      console.log("All songs retrieved successfully:", allSongs);
      res.send({ message: "Songs retrieved successfully", data: allSongs });
    })
    .catch((error) => {
      console.error("Error retrieving songs:", error);
      res.status(500).send({ message: "Failed to retrieve songs" });
    });
};

exports.show = (req, res) => {
  Song.findById(req.params.id)
    .then((song) => {
      if (!song) {
        return res.status(404).send({ message: "Song not found" });
      }
      console.log("Song retrieved successfully:", song);
      res.send({ message: "Song retrieved successfully", data: song });
    })
    .catch((error) => {
      console.error("Error retrieving song:", error);
      res.status(500).send({ message: "Failed to retrieve song" });
    });
};

exports.store = (req, res) => {
  const newSong = new Song({
    title: req.body.title,
    artist: req.body.artist,
    category: req.body.category,
    album: req.body.album,
    url: req.body.url,
    photo: req.body.photo,
    year: req.body.year,
  });

  newSong
    .save()
    .then(() => {
      console.log("New song added successfully");
      res.send({ message: "Data stored successfully", data: newSong });
    })
    .catch((error) => {
      console.error("Error adding new song:", error);
      res.status(500).send({ message: "Failed to add new song" });
    });
};

exports.update = (req, res) => {
  Song.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedSong) => {
      if (!updatedSong) {
        return res.status(404).send({ message: "Song not found" });
      }
      console.log("Song updated successfully:", updatedSong);
      res.send({ message: "Song updated successfully", data: updatedSong });
    })
    .catch((error) => {
      console.error("Error updating song:", error);
      res.status(500).send({ message: "Failed to update song" });
    });
};

exports.delete = (req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then((deletedSong) => {
      if (!deletedSong) {
        return res.status(404).send({ message: "Song not found" });
      }
      console.log("Song deleted successfully");
      res.send({ message: "Song deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting song:", error);
      res.status(500).send({ message: "Failed to delete song" });
    });
};

