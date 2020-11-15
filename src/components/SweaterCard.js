import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SweaterCardStyled from "./styles/SweaterCard.styled";

function SweaterCard({ image, brand, country, season, material, size, price }) {
  return (
    <SweaterCardStyled>
      <Card className="card">
        <CardActionArea>
          <CardMedia className="media" image={image} title="Sweater" />
          <CardContent>
            <div className="brand">
              <h1>{brand}</h1>
              <FavoriteBorderIcon />
            </div>
            <div className="feature">
              <p>Country:</p>
              <p>{country}</p>
            </div>
            <div className="feature">
              <p>Season:</p>
              <p>{season}</p>
            </div>
            <div className="feature">
              <p>Material:</p>
              <p>{material}</p>
            </div>
            <div className="feature">
              <p>Size:</p>
              <p>{size}</p>
            </div>
            <div className="price">
              <p>Price:<span>${price}</span></p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </SweaterCardStyled>
  );
}

export default SweaterCard;
