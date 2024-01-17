const express= require("express");
const { setPost, getPosts, editPost, deletePost, likePost } = require("../controller/post.controllers");

const router = express.Router();

router.get("/", getPosts);
router.post("/", setPost); 
router.put("/:id", editPost);
router.delete("/:id", deletePost)
router.patch("/like-post/:id",likePost)

router.patch("/dislike-post/:id",(req,res) =>{
    res.json({message:"post dislike: id:" + req.params.id})
})



module.exports=router