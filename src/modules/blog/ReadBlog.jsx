import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import style from "./ReadBlog.module.css";
import { findAllCategoryById } from "../../services/CategoryService";
import { Helmet } from "react-helmet";

export default function ReadBlog() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Fetch the post content by ID
    findAllCategoryById(id).then((postResp) => {
      setPost(postResp);
    });

    // Fetch comments for the post by ID
    fetchCommentsByPostId(id); // Function to fetch comments
  }, [id]);

  // Function to fetch comments by post ID
  const fetchCommentsByPostId = (postId) => {
    const dummyComments = [
      { id: 1, text: "Great post!", user: "User1" },
      { id: 2, text: "Interesting read!", user: "User2" },
      { id: 2, text: "Interesting read!", user: "User2" },
      
     
    ];
    setComments(dummyComments);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission
    // if (newComment.trim() !== '') {
    //   // Make an API call to post the new comment
    //   postComment(id, newComment).then(() => {
    //     // Update the comments by fetching them again
    //     fetchCommentsByPostId(id);
    //     // Clear the new comment input
    //     setNewComment('');
    //   });
  };

  return (
    <Container>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        {/* Add other meta tags as needed */}
      </Helmet>
      <div className={`${style.container} mt-1`}>
        <div className={style.content}>
          <Card>
            <Card.Header as="h1">{post.title}</Card.Header>
            <Card.Img
              variant="top"
              src={post.image}
              className="mx-auto"
              style={{ maxHeight: "400px", width: "70%" }}
            />
            <Card.Body>
              <Card.Text>
                {post.description}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                distinctio commodi, quibusdam, odio magnam alias cupiditate
                dolore aspernatur harum molestias animi dolorum. Officia in
                nobis dolorem est asperiores autem ab hic delectus iure nesciunt
                ssitatibus maxime beatae minus. Similique, eum laboriosam! Neque
                saepe corporis dicta iusto nihil, iure pariatur accusantium at
                aut ea commodi dolor incidunt laboriosam quod eius, nam nisi.
                {/* Additional post content */}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className={style.commentSection}>
          {/* Comment Section */}
          <h2>Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id} className={style.comment}>
              <p>{comment.text}</p>
              <p className={style.commentUser}>- {comment.user}</p>
            </div>
          ))}

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className={style.commentForm}>
            <textarea
              rows="4"
              placeholder="Write your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <button type="submit">Post Comment</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
