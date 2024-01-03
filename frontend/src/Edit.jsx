import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Edit = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [displayPrice, setDisplayPrice] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [description, setDescription] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const api_base = "http://localhost:8000";

  useEffect(() => {
    getProductDetails();
  }, []);

  const params = useParams();
  const navigate = useNavigate();

  const getProductDetails = async () => {
    const response = await fetch(`${api_base}/product/edit/${params.id}`);
    const result = await response.json();
    const {
      productName,
      category,
      displayPrice,
      sellingPrice,
      purchasePrice,
      description,
    } = result;
    setProductName(productName),
      setCategory(category),
      setDisplayPrice(displayPrice),
      setPurchasePrice(purchasePrice),
      setSellingPrice(sellingPrice),
      setDescription(description);
  };

  const editProduct = async () => {
    let response = await fetch(`${api_base}/product/edit/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        productName,
        category,
        displayPrice,
        sellingPrice,
        purchasePrice,
        description,
      }),
    });
    response = await response.json();
    console.log(response);
    navigate("/dashboard");
  };

  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Edit Product</h1>

      <section className="inputs">
        <label htmlFor="ProductName">
          Product Name:
          <input
            type="text"
            value={productName}
            id="ProductName"
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>

        <label htmlFor="category">
          Choose Chategoty:
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="cold-drinks">Cold Drinks</option>
            <option value="meet">Meet</option>
          </select>
        </label>
        <label htmlFor="selling-price">
          Selling Price:
          <input
            type="number"
            id="selling-price"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </label>

        <label htmlFor="DisplayPrice">
          Stock
          <input
            type="number"
            id="DisplayPrice"
            value={displayPrice}
            onChange={(e) => setDisplayPrice(e.target.value)}
          />
        </label>
        <label htmlFor="PurchasePrice">
          PurchasePrice:
          <input
            type="number"
            id="PurchasePrice"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
          />
        </label>
        <label htmlFor="Description">
          Description:
          <textarea
            id="Description"
            rows="4"
            cols="50"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        {/* <label htmlFor="file-image">
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

        <button onClick={editProduct}>Edit Product</button>
      </section>
    </section>
  );
};

export default Edit;
