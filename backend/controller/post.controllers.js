const postModel = require('../models/post.model')


module.exports.getPosts = async (req,res) => {

    const posts = await postModel.find()
        res.status(200).json({posts})
    };
module.exports.setPost = async (req,res) => {

    if (!req.body.message) {
        res.status(400).json({message:"merci dajouter un message"})
    }
    const post = await postModel.create({
        message: req.body.message,
        author:req.body.author,
    });
    res.status(200).json({post})
}
module.exports.editPost = async (req, res) => {
    try {
        let postId = req.params.id;
        
        // Supprimez les caractères de nouvelle ligne de l'ID
        postId = postId.replace(/\n/g, '');

        console.log('Post ID:', postId);

        const post = await postModel.findById(postId);
        if (!post) {
            return res.status(404).json({ message: "Ce message n'existe pas" });
        }

        console.log('Post avant la mise à jour:', post);

        const updatedPost = await postModel.findByIdAndUpdate(
            postId,
            req.body,
            { new: true }
        );

        console.log('Post après la mise à jour:', updatedPost);

        res.status(200).json({ updatedPost });
    } catch (error) {
        console.error("Erreur lors de la mise à jour du post:", error.message);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
};
module.exports.deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await postModel.findById(postId);

        if (!post) {
            return res.status(404).json({ message: "Ce message n'existe pas" });
        }

        await postModel.findOneAndDelete({ _id: postId });

        res.status(200).json({ message: 'Post supprimé', post });
    } catch (error) {
        console.error("Erreur lors de la suppression du post:", error.message);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
};
module.exports.likePost = async (req, res) => {
    
        const postId = req.params.id;
        const userId = req.body.userId;

        const updatedPost = await postModel.findByIdAndUpdate(
            postId,
            { $addToSet: { likers: userId } },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({ message: "Ce post n'existe pas" });
        }

        res.status(200).json(updatedPost);
   
};