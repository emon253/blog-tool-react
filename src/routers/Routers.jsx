import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ViewBlog from "../pages/blog/ViewBlog";
import ReadBlog from "../modules/blog/ReadBlog";
import ReadABlog from "../pages/blog/ReadABlog";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/public-blogs" element={<ViewBlog />} />
          <Route path="/read/:id" element={<ReadBlog />} />

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
