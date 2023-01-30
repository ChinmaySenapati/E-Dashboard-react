import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [catagory, setCatagory] = React.useState("");
  const navigate = useNavigate();
  const addPro = async () => {
    console.log(name, price, company, catagory);

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    // console.log(userId);
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, company, catagory, userId }),
      headers: {
        "content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        className="inputBox"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        className="inputBox"
        placeholder="Enter Price Name"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <input
        type="text"
        className="inputBox"
        placeholder="Enter Company Name"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />

      <input
        type="text"
        className="inputBox"
        placeholder="Enter Catagory Name"
        value={catagory}
        onChange={(e) => {
          setCatagory(e.target.value);
        }}
      />

      <button type="button" className="appButton" onClick={addPro}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
