import { Container } from "react-bootstrap";
import React, { Suspense } from "react";
import { Modal, Button, Form } from "react-bootstrap";

// import PostCard from "../../components/card/PostCard";
import { useEffect, useState } from "react";
import style from "./ViewBlog.module.css";
import ViewCategories from "../category/ViewCategories";
import CreateBlog from "../../modules/blog/CreateBlog";
import { Helmet } from "react-helmet";
import AuthService from "../../services/AuthService";
import axios from "axios";
const PostCard = React.lazy(() => import("../../components/card/PostCard"));

export default function ViewBlog() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Logic to handle search functionality based on searchQuery
    // Perform search based on the searchQuery value
    console.log("Searching for:", searchQuery);
  };

  // const getAllPost = async () => {
  //   const response = await findAllPosts().then((response) => {
  //     setPosts(response);
  //   });
  // };
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then((response) => {
      // console.log(response.data);
      setPosts(response.data);
    });
    // console.log(posts);
  }, []);

  return (
    <Container>
      <Helmet>
        <title>View All Blogs - Your Website Name</title>
        <meta
          name="description"
          content="Explore our collection of blogs on various topics."
        />
        {/* Add other meta tags as needed */}
      </Helmet>
      <div className={style.blogPage}>
        <div className={style.categories}>
          <h3>Categories</h3>
          <ViewCategories />
        </div>
        <div className={style.blogs}>
          {AuthService.isLoggedIn() && <CreateBlog />}
          
          
          
          {/* search blogs */}
          <Form.Group
            className={`text-center ${style.blogSearchForm}`}
            controlId="blogSearch"
          >
            <div className="d-flex justify-content-center align-items-center">
              <Form.Control
                type="text"
                placeholder="Enter keywords to search blog"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow-1 me-2 me-md-0"
              />
              <Button className="m-1" variant="primary" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </Form.Group>
          {/* search blogs */}
        
         
          {/* show all posts */}
          <Suspense fallback={<div>Loading...</div>}>
            {
            posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Suspense>
        </div>
      </div>
    </Container>
  );
}
