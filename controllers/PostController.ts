import Post from '../models/Post'

// get all posts
export function getAllPosts(req, res, next) {
  Post.find((err, posts) => {
    
    if (err) {
      res.status(500).json({ err })
    }
    res.status(200).json({ posts })

  })
}

// get post by id
export function getPostById(req, res, next) {
  
}
// create post
export function createPost(req, res, next) {
  
}
// update post by id
export function updatePost(req, res, next) {

}

// delete post by id
export function deletePost(req, res, next) {
  
}
