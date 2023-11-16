import Card from "react-bootstrap/Card";
import style from "./PostCard.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function PostCard({ post }) {
  return (
    <div className={`mt-1 ${style.postCard}`}>
      <Card>
        <div className={`row p-2`}>
          <div className={`col-md-3 col-sm-12`}>
            <img
              className="img-fluid"
              src={post.image}
              alt={post.title}
              style={{ maxHeight: "250px", width: "100%" }}
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <Card.Body>
              <Card.Title className="text-primary">{post.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {post.category}
              </Card.Subtitle>
              <Card.Text>{post.description}</Card.Text>
              <Card.Link as={Link} to={`/read/${post.id}`}>
                Read more
              </Card.Link>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}
