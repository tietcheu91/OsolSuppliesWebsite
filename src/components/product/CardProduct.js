import React from "react";
import { FunctionComponent, useState } from "react";
import Button from "react-bootstrap/Button";
// import Button from '@mui/material/Button';
import Card from "react-bootstrap/Card";
import Products from "./ProductsData";
import pochette from "../../images/gallery/pochetteBest.jpg";
import Mirror from "../../images/gallery/mirrorMix.jpg";
import Badge from "../../images/gallery/badge.jpg";
import star from "../../images/star.jpg";
import MyCarousel from "./MyCarousel";

function CardProduct(props) {
  const [selectValue, setSelectValue] = useState("Orange");

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  let status;
  if (props.quantity === 0) status = "Sold Out";
  else if (props.quantity === 1) status = "1 left";
  else status = "Available";

  return (
    <div>
      <Card className="cardMain" style={{ width: "18rem" }}>
        <div className="card--badge">{status}</div>
        {/* <Card.Img alt={props.productName} className="cardImg" variant="top" src={props.imgCard}/> */}
        <MyCarousel imageName={props.imgCard} />
        <Card.Body className="cardBody">
          <Card.Title className="card-title">
            <img src={props.imgStar} width={55} height={50} />
            <span className="title--span">{props.rating}</span>
            <span className="title--span"> ({props.numberOfReview}) • </span>
            <span className="title--span">{props.country}</span>
          </Card.Title>
          <Card.Text className="card-text">
            <span className="text--span"> {props.productName} </span>
            <span className="text--span">
              Color: {props.color}
            </span>
          </Card.Text>
          <Card.Text>
            <span> Price: </span>
            <span> ${props.price} </span>
          </Card.Text>
          <button
            type="submit"
            // disabled={() => {props.isInCart(props.productId)}}
            onClick={() => {
              props.addToCart(props.data);
            }}
          >
            Shop
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProduct;
