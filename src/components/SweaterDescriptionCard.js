import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { addFavorite, removeFavorite } from "../context/actionCreators";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SweaterCardStyled from "./styles/SweaterCard.styled";
import sweaterImage from "../images/sweater3.jpg";

function SweaterDescriptionCard({ sweater }) {
  const dispatch = useDispatch();
  const selectedFavorites = useSelector((state) => state.favorites);
  const [favorites, setFavorites] = useState(selectedFavorites.favorites);

  useEffect(() => {
    setFavorites(selectedFavorites.favorites);
  }, [selectedFavorites]);

  const handleAddFavorite = useCallback((id) => dispatch(addFavorite(id)), [
    dispatch,
  ]);

  const handleRemoveFavorite = useCallback(
    (id) => dispatch(removeFavorite(id)),
    [dispatch]
  );

  return (
    <SweaterCardStyled>
      <Card className="card">
        <CardActionArea>
          <CardMedia className="media" image={sweaterImage} title="Sweater" />
          <CardContent>
            <div className="card_content">
              <div className="brand">
                <h1>{sweater.brandName}</h1>
                {favorites.includes(sweater.sweaterId) ? (
                  <FavoriteIcon
                    color="primary"
                    onClick={() => handleRemoveFavorite(sweater.sweaterId)}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => handleAddFavorite(sweater.sweaterId)}
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
