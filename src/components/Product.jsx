import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice.js";
import { useDispatch } from "react-redux";
export default function Product({ data }) {
  const dispatch = useDispatch();
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row ">
        {data.map((alldata) => {
          return (
            <>
              <div className="col-3 ">
                <div className="card " style={{ width: "18rem" }}>
                  <Link to={`/single/${alldata.id}`}>
                    <img src={alldata.image} class="card-img-top" alt="..." />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{alldata.title}</h5>
                    <p className="card-text">{alldata.description}</p>
                    <p className="card-text">Price: {alldata.price} $</p>
                    <p className="card-text">
                      Rating: {alldata.rating && alldata.rating.rate}/5
                    </p>
                    <Button
                      variant="contained"
                      onClick={() => {
                        dispatch(addToCart(alldata));
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
