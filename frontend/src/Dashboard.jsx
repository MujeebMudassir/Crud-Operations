import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);

  // calling apis for data

  // base api end point
  const api_base = "http://localhost:8000";

  // reading data from backend
  const getData = async () => {
    const response = await fetch(`${api_base}/`);
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  // deleting product using product id
  const deleteProduct = (id) => {
    fetch(`${api_base}/product/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    let newData = data.filter((item) => item._id !== id);
    console.log(newData);

    setData(newData);
  };

  // editing product using product id
  // const editProduct = (id) => {
  //   fetch(`${api_base}/product/edit/${id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //   });
  // };

  // getting data from useEffect hook on page load
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="section">
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Dashboard</h1>
      <table>
        <tbody>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Selling Price</th>
            <th>Stock</th>
            <th>status</th>
            <th>Action</th>
          </tr>
          {data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.productName}</td>
                    <td>{item.category}</td>
                    <td>{item.sellingPrice}</td>
                    <td>{item.displayPrice}</td>
                    <td>{item.displayPrice}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => deleteProduct(item._id)}
                      >
                        delete
                      </button>{" "}
                      <Link className="btn" to={`/edit/product/${item._id}`}>
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })
            : "No Product Found"}
        </tbody>
      </table>
    </section>
  );
};

export default Dashboard;
