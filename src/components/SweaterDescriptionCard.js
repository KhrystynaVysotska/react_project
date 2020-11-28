import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SweaterCardStyled from "./styles/SweaterCard.styled";
import { useGlobalContext } from "../context/globalState";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../context/actions";

function SweaterDescriptionCard({ sweater }) {
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
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </SweaterCardStyled>
  );
}

export default SweaterDescriptionCard;
