import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  // Fetch orders on component mount
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders")  // Make sure you have this route in your backend
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      });
  }, []);

  return (
    <div className="orders">
      {allOrders.length > 0 ? (
        <ul>
          {allOrders.map((order, index) => (
            <li key={index}>
              <p>Quantity: {order.qty}</p>
              <p>Price: {order.price}</p><br></br>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
