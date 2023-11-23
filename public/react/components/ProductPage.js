import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = ({fetchSingleProduct, singleProduct}) => {

  const { id } = useParams();



  useEffect(() => {
    fetchSingleProduct(id);
  }, [id, fetchSingleProduct]);

  return (
    <div>
      <img src={singleProduct.image} alt={singleProduct.name} />
      <h1 className="font-bold text-lg my-7">{singleProduct.name}</h1>
      <p className="text-sm">{singleProduct.description}</p>
      <p className="font-bold text-blue-600">£{singleProduct.price}</p>
      <p>{singleProduct.category}</p>
      <p>{singleProduct.featured}</p>
    </div>
  );
};

export default ProductPage;
