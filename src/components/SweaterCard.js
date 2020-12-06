import React, { useCallback, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../context/actionCreators";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SweaterCardStyled from "./styles/SweaterCard.styled";
import Button from "@material-ui/core/Button";
import sweaterImage from "../images/sweater1.jpg";

function SweaterCard({ sweater }) {
  const dispatch = useDispatch();
  const selectedFavorites = useSelector((state) => state.favorites);
  const [favorites, setFavorites] = useState(selectedFavorites.favorites);
  let history = useHistory();
  let location = useLocation();

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
              <div className="country">
                <p>
                  Country:
                  <span className="value">{sweater.countryOfManufacture}</span>
                </p>
              </div>
              <div className="size">
                <p>
                  Size:<span className="value">{sweater.size}</span>
                </p>
              </div>
              <div className="price">
                <p>
                  Price:<span className="value">${sweater.priceInUah}</span>
                </p>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className="view_button">
          <Button
            id={`view-button-${sweater.sweaterId}`}
            color="primary"
            onClick={() =>
              history.push({
                pathname: `/item/${sweater.sweaterId}`,
                state: {
                  background: location,
                },
              })
            }
          >
            View
          </Button>
        </CardActions>
      </Card>
    </SweaterCardStyled>
  );
}

export default SweaterCard;
