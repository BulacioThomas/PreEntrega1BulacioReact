import React, { useEffect, useState } from "react";
import "./CardListComponent.css";
import axios from "axios";

import Catalogo from "../Catalogo/Catalogo";

import { Link } from "react-router-dom";

const CardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products").then((res) =>
      setProducts(res.data.products)
    );
  }, []);

  return (
    <div className="Cards-List">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/product-detail/${product.id}`}>
              <Catalogo data={product} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
