import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Home from "./pages/home/Home";
import AddBlog from "./pages/add blog/AddBlog";
import BlogDetail from "./pages/detail/BlogDetail";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    switch (location.pathname) {
      case "/add-blog":
        document.body.style.background = "#fff";
        break;
      default:
        document.body.style.background = "#F3F2FA";
    }
  }, [location.pathname]);
  const handleSubmit = () => {
    console.log("hi");
  };
  return (
    <>
      <Header handleSubmit={handleSubmit} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
