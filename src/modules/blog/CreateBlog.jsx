import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import BlogService from "../../services/BlogService";
import CreateCategory from "../../pages/category/CreateCategory";

export default function CreateBlog() {
  const [showModal, setShowModal] = useState(false);
  const [showCategoryModal, setCategoryShowModal] = useState(false);
  const [blogPostData, setBlogPostData] = useState({
    title: "",
    category: "",
    image: "",
    imageAltText: "",
    metaTitle: "",
    metaDescription: "",
    permalink: "",
    content: "",
  });

  const handleInputClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleInputClick2 = () => {
    setCategoryShowModal(true);
  };

  const handleCloseModal2 = () => {
    setCategoryShowModal(false);
  };

  const handleCreateBlog = () => {
    // Save the blogPostData or perform an action with the data
    console.log("Blog Post Data:", blogPostData);
    const response = BlogService.createBlog(blogPostData);
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogPostData({
      ...blogPostData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setBlogPostData({
      ...blogPostData,
      image: e.target.files[0],
    });
  };

  const handleContentChange = (content) => {
    setBlogPostData({
      ...blogPostData,
      content: content,
    });
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
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={blogPostData.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="blogCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={blogPostData.category}
                onChange={handleInputChange}
              >
                <option value="">Select category</option>
                {/* Add options for categories */}
                <option value="Technology">Technology</option>
                <option value="Travel">Travel</option>
                {/* Add more category options */}
              </Form.Control>
              <Form.Text className="text-muted">
                Can't find your category?{" "}
                <a onClick={handleInputClick2} href="#">
                  Create a new one
                </a>
                .
              </Form.Text>
            </Form.Group>

            <Modal
              show={showCategoryModal}
              onHide={() => setCategoryShowModal(false)}
              centered
              size="md"
            >
              <Modal.Header closeButton>
                <Modal.Title>Add New Category</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CreateCategory />
              </Modal.Body>
              
            </Modal>

            <Form.Group className="mb-3" controlId="blogImage">
              <Form.Label>Image</Form.Label>
              {/* <Form.Control
                type="file"
                name="image"
                value={blogPostData.image}
                onChange={handleInputChange}
              /> */}

              <Form.Label>Image Alt Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image alt text"
                name="imageAltText"
                value={blogPostData.imageAltText}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="blogMeta">
              <Form.Label>SEO Information</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter meta title"
                name="metaTitle"
                value={blogPostData.metaTitle}
                onChange={handleInputChange}
              />
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter meta description"
                name="metaDescription"
                value={blogPostData.metaDescription}
                onChange={handleInputChange}
              />
              <Form.Control
                type="text"
                placeholder="Enter permalink/URL"
                name="permalink"
                value={blogPostData.permalink}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="blogContent">
              <Form.Label>Content</Form.Label>
              {/* Rich text editor */}
              <ReactQuill
                name="content"
                value={blogPostData.content}
                onChange={handleContentChange}
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
