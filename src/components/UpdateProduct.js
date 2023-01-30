import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [catagory, setCatagory] = React.useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // console.log(params);
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    // console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    //console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCompany(result.company);
    setCatagory(result.catagory);
  };

  const updateProduct = async () => {
    console.log(name, price, company, catagory);
    // const userId = JSON.parse(localStorage.getItem("user"))._id;
    // // console.log(userId);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, company, catagory }),
      headers: {
        "content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    console.log(result);

    navigate("/");
  };

  return (
    <div className="product">
      <h1>Update Product</h1>
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

      <button type="button" className="appButton" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
