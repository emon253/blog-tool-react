import { Container } from "react-bootstrap";
import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findAllCategoryById } from "../../services/CategoryService";
import Card from "react-bootstrap/Card";
import style from "./ReadBlog.module.css";
import ViewCategories from "../../pages/category/ViewCategories";
import { dummyText } from "../../contants/Const";

export default function ReadBlog() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    findAllCategoryById(id).then((postResp) => {
      setPost(postResp);
    });
  }, []);

  return (
    <Container>
      <div className={`mt-1 d-flex `}>
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
                <br />
                {dummyText}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className={style.categories}>
          <ViewCategories />
        </div>
      </div>
    </Container>
  );
}
