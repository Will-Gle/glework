import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./components/LoginSignupPassword/Login";
import Signup from "./components/LoginSignupPassword/Signup";
import LostPass from "./components/LoginSignupPassword/LostPass";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Landing from "./components/Landing";

// Component quản lý hiển thị Header/Footer và Routing
function AppLayout() {
  const location = useLocation(); // Lấy đường dẫn hiện tại
  // Kiểm tra nếu path là /, /login, /signup hoặc /lost-password thì không hiển thị Header/Footer
  const hideHeaderFooter = [
    "/",
    "/login",
    "/signup",
    "/lost-password",
  ].includes(location.pathname);

  return (
    <>
      {/* Chỉ hiển thị Header nếu không phải là trang /login, /signup, hoặc /lost-password */}
      {!hideHeaderFooter && <Header />}
      <Routes>
        {/* Đặt các route ở đây, không lồng thêm `Routes` */}
        {/* Nếu cần, bạn có thể thêm component Landing vào trang `/` */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lost-password" element={<LostPass />} />
        <Route path="*" element={<Login />} />
      </Routes>
      {/* Chỉ hiển thị Footer nếu không phải là trang /login, /signup, hoặc /lost-password */}
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

// Router chính của ứng dụng
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
