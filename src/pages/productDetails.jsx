import { useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { productID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(productID);
  }, []);
  return (
    <>
      <h1>Product Details</h1>
      {productID ? (
        <>
          <h1>Product Name: </h1>
        </>
      ) : (
        <>
          <p>No product found</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go to Home Page
          </button>
          <NavLink to="/">Go to home page</NavLink>
        </>
      )}
    </>
  );
};

export default ProductDetails;
