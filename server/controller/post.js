// const Post = require('../models').Post;
// const User = require('../models').User;

// module.exports = {

//      getAllPostsOfUser(req,res) {
//         try {
//             const userCollection =  User.find({
//                 id : req.params.userId
//             });

//             if(userCollection){
//                 const postCollection =  Post.find({
//                     userId : req.params.userId
//                 })

//                 res.status(201).send(postCollection);
//             }
//             else{
//                 re.status(404).send("User Not Found")
//             }
//         }
//         catch(e){
//             console.log(e);
//             res.status(500).send(e);
//         }

//     },

//         createPost(req,res) {

//         try {
//             const post =  Post.create({
//                 title : req.body.title,
//                 userId : req.body.userId
//             });
//             res.status(201).send(req.body)
//         }
//         catch(e){
//             console.log(e);
//             res.status(400).send(e);
//         }
//     },

//      update(req,res) {
//         try{
//             const postCollection =  Post.find({
//                 id : req.params.postId
//             });

//             if(postCollection){
//                 const updatedPost =  postCollection.update({
//                     title : req.body.title
//                 })

//                 res.status(201).send(updatedPost);
//             }
//             else{
//                 res.status(404).send("Post Not Found");
//             }

//         }
//         catch(e){
//             console.log(e);
//             res.status(400).send(e);
//         }

//     }
// }