import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Catalogo from "../../components/Catalogo/Catalogo";

const ProductsDetail = (props) => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`).then((res) =>
      setProduct(res.data)
    );
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Product Detail</h2>
      <Catalogo data={product} />
    </div>
  );
};

export default ProductsDetail;
