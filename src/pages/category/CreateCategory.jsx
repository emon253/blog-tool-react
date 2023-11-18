import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function CreateCategory() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  const addCategory = () => {
    if (newCategory !== "") {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  return (
    <div className="container mt-4">
      {/* <h2>Categories</h2> */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter new category"
          value={newCategory}
          onChange={handleCategoryChange}
        /> &nbsp;
        <Button variant="primary" size="sm">
         Add Category
        </Button>
      </div>
    </div>
  );
}
