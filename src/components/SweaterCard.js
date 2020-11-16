import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SweaterCardStyled from "./styles/SweaterCard.styled";

function SweaterCard({
  favorites,
  setFavorites,
  id,
  image,
  brand,
  size,
  price,
}) {
  const addFavorite = (id) => {
    let array = favorites.slice();
    if (!array.includes(id)) {
      array.push(id);
    }
    setFavorites(array);
    console.log(favorites);
  };
  const removeFavorite = (id) => {
    let array = favorites.filter((element) => element !== id);
    setFavorites(array);
    console.log(favorites);
  };
  return (
    <SweaterCardStyled>
      <Card className="card">
        <CardActionArea>
          <CardMedia className="media" image={image} title="Sweater" />
          <CardContent>
            <div className="card_content">
              <div className="brand">
                <h1>{brand}</h1>
                {favorites.includes(id) ? (
                  <FavoriteIcon
                    color="primary"
                    onClick={() => removeFavorite(id)}
                  />
                ) : (
                  <FavoriteBorderIcon onClick={() => addFavorite(id)} />
                )}
              </div>
              <div className="size">
                <p>
                  Size:<span>{size}</span>
                </p>
              </div>
              <div className="price">
                <p>
                  Price:<span>${price}</span>
                </p>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </SweaterCardStyled>
  );
}

export default SweaterCard;
