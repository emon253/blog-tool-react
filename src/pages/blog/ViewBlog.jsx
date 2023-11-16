import { Container } from "react-bootstrap";
import React, { Suspense } from "react";
import { Modal, Button, Form } from "react-bootstrap";

// import PostCard from "../../components/card/PostCard";
import { useEffect, useState } from "react";
import { findAllPosts } from "../../services/blogService";
import axios from "axios";
import style from "./ViewBlog.module.css";
import ViewCategories from "../category/ViewCategories";
import CreateBlog from "../../modules/blog/CreateBlog";
const PostCard = React.lazy(() => import("../../components/card/PostCard"));

export default function ViewBlog() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Logic to handle search functionality based on searchQuery
    // Perform search based on the searchQuery value
    console.log("Searching for:", searchQuery);
  };

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    const response = await findAllPosts().then((response) => {
      setPosts(response);
    });
  };

  return (
    <Container>
      <div className={style.blogPage}>
        <div className={style.blogs}>
          {/* search blog form and create blog  */}
          <CreateBlog />
          <Form.Group className="text-center mt-1" controlId="blogSearch">
            <div className="d-flex justify-content-center align-items-center">
              <Form.Control
                type="text"
                placeholder="Enter keywords to search blog"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: "50%"}}
                className="flex-grow-1 me-2 me-md-0 "

              />
              <Button className="m-2" variant="primary" size="md" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </Form.Group>
          {/* search blog form and create blog  */}

          {/* retrieving all public blogs starts */}
          <Suspense fallback={<div>Loading...</div>}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Suspense>
        </div>
        <div className={style.categories}>
          <ViewCategories />
        </div>
        {/* Lazy loading.... */}
      </div>
    </Container>
  );
}
