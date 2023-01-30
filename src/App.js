import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* <h1>E-Dashboard</h1> */}
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
