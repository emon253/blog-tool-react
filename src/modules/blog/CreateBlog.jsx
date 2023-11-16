import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

export default function CreateBlog() {
  const [showModal, setShowModal] = useState(false);
  const [editorContent, setEditorContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const handleInputClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCreateBlog = () => {
    // Logic to handle creating a blog post with editorContent, selectedCategory, and selectedImage
    setShowModal(false); // Close the modal after creating the post
  };

  return (
    <>
      <div className="pt-2">
        {/* Input field acting as a placeholder */}
        <Form.Control
          type="text"
          placeholder="What's on your mind? create new blog"
          onClick={handleInputClick}
        />
      </div>

      {/* Modal for creating a blog post */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create Blog Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form fields for creating a blog post */}
          <Form>
            <Form.Group className="mb-3" controlId="blogTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="blogCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select category</option>
                {/* Add options for categories */}
                <option value="Technology">Technology</option>
                <option value="Travel">Travel</option>
                {/* Add more category options */}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="blogImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="blogContent">
              <Form.Label>Content</Form.Label>
              {/* Rich text editor */}
              <ReactQuill
                value={editorContent}
                onChange={setEditorContent}
                style={{ height: "300px" }} // Adjust height as needed
                modules={{ toolbar: true }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateBlog}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  
}
