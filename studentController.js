    const  error  = require("console");
    const Song=require("../models/Song.js");
    exports.index=(req,res)=>{
        Song.find()
        .then((allSongs)=>{
            console.log("all songs retrieved successfully:",allSongs);
            res.send({message:"Songs retrieved successfully",data:allSongs});
        })
        .catch((error)=>{
            console.error("error retrieving songs:",error);
        });
    };
    exports.show=(req,res)=>{
        Song.findById(req.params.id)
        .then((song)=>{
            console.log("all songs retrieved successfully:",song);
            res.send({message:"Songs retrieved successfully",data:song});
        })
        .catch((error)=>{
            console.error("Error retrieving songs",error);

        });
    };
    exports.store=(req,res)=>{
        const newSong=new Song({
            title:req.body.title,
            artist:req.body.artist,
            category:req.body.category,
            album:req.body.category,
            album:req.body.album,
            url:req.body.url,
            photo:req.body.photo,
            year: req.body.year,
        });
        newSong
        .save()
        .then(()=>{
            console.log("New song added successfully");
        })
        .catch((error)=>{
            console.error("error adding new song:",error);
        });
        res.send({message:"Data stored successfully",data:newSong});
    };
        res.send({message:"Song updated successfully",data:updatedSong});
    exports.update=(req,res)=>{
        Song.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then((updatedSong)=>{
            console.log("song updated successfully:",updatedSong);
            res.send({message:"Song updated successfully",date:updatedSong});
        })
        .catch((error)=>{
            console.error("Error updating song:",error);
        });
    };
    exports.delete=(req,res)=>{
        Song.findByIdAndDelete(req.params.id)
        .then(()=>{
            console.log("song deleted successfully");
            res.send({message:"Song deleted successfully"});
        })
        .catch((error)=>{
        console.error("error deleting song:",error);
        });
    };
