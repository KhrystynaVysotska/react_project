import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SweaterCardStyled from "./styles/SweaterCard.styled";
import Button from "@material-ui/core/Button";
import { useGlobalContext } from "../context/globalState";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../context/actions";

function SweaterCard({ sweater }) {
  const { dispatch, favorites } = useGlobalContext();
  const toggleFavorite = (sweater, action) => {
    dispatch({
      type: action,
      payload: sweater,
    });
  };
  return (
    <SweaterCardStyled>
      <Card className="card">
        <CardActionArea>
          <CardMedia className="media" image={sweater.image} title="Sweater" />
          <CardContent>
            <div className="card_content">
              <div className="brand">
                <h1>{sweater.brand}</h1>
                {favorites.includes(sweater) ? (
                  <FavoriteIcon
                    color="primary"
                    onClick={() => toggleFavorite(sweater, REMOVE_FAVORITE)}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => toggleFavorite(sweater, ADD_FAVORITE)}
                  />
                )}
              </div>
              <div className="size">
                <p>
                  Size:<span className="value">{sweater.size}</span>
                </p>
              </div>
              <div className="price">
                <p>
                  Price:<span className="value">${sweater.price}</span>
                </p>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className="view_button">
          <Button id={"view-button-" + sweater.id} color="primary">
            View
          </Button>
        </CardActions>
      </Card>
    </SweaterCardStyled>
  );
}

export default SweaterCard;
