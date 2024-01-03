import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [displayPrice, setDisplayPrice] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [description, setDescription] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const navigate = useNavigate();

  const api_base = "http://localhost:8000";
  // posting data to backend
  const postData = async () => {
    console.log("post function");

    if (
      productName &&
      category &&
      displayPrice &&
      sellingPrice &&
      description
    ) {
      const response = await fetch(`${api_base}/product/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: productName,
          category: category,
          displayPrice: displayPrice,
          sellingPrice: sellingPrice,
          purchasePrice: purchasePrice,
          description: description,
        }),
      });
      const newUser = await response.json();
      console.log(newUser);
      navigate("/dashboard");
    } else {
      alert("Enter Valid Input In All Fields");
    }
  };
  return (
    <section>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Upload Product</h1>

      <section className="inputs">
        <input
          type="text"
          value={productName}
          id="ProductName"
          placeholder="Product Name"
          onChange={(e) => setProductName(e.target.value)}
        />

        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value={false}>---select category---</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="cold-drinks">Cold Drinks</option>
          <option value="meet">Meet</option>
        </select>

        <input
          type="number"
          id="selling-price"
          placeholder="Selling Price"
          onChange={(e) => setSellingPrice(e.target.value)}
        />

        <input
          type="number"
          id="DisplayPrice"
          placeholder="Stock"
          onChange={(e) => setDisplayPrice(e.target.value)}
        />

        <input
          type="number"
          id="PurchasePrice"
          placeholder="Purchase Price"
          onChange={(e) => setPurchasePrice(e.target.value)}
        />

        <textarea
          id="Description"
          rows="4"
          cols="5"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* 
        <label htmlFor="file-image">
          Upload Product Image:
          <input
            type="file"
            id="file-image"
            onChange={(e) => {
              console.log(e.target.files[0]);
              setFile(e.target.files[0]);
            }}
          />
        </label> */}

        <button style={{ borderRadius: "0.4rem" }} onClick={postData}>
          UPLOAD Product
        </button>
      </section>
    </section>
  );
};

export default CreateProduct;
