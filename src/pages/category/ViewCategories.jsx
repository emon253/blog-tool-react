import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
import { findAllCategory } from "../../services/CategoryService";

export default function ViewCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    //--------------- find all categories ----------------
    findAllCategory().then((categoryResponse) => {
      setCategories(categoryResponse);
    });
    //--------------- find all categories ----------------
  }, []);
  return (
    <ListGroup as="ol" numbered>
      {categories.map((category, index) => (
        <ListGroup.Item
          key={index}
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div key={index} className="fw-bold">
              {category}
            </div>
            {/* Cras justo odio */}
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
