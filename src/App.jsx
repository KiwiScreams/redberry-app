import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import AddBlog from "./pages/add blog/AddBlog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
