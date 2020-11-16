import React from "react";
import MainSlider from "../slider/MainSlider.js";
import HomeStyled from "../styles/Home.styled.js";
import MenuStyled from "../styles/Menu.styled.js";
import Container from "../styles/Container.js";
import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchIcon from "@material-ui/icons/Search";
import SweaterCard from "../SweaterCard.js";
import { sweaters } from "../Sweaters.js";
import { fontSize } from "../constants/Constants.js";

function Home(props) {
  const button = {
    roundedButton: {
      borderRadius: "23px",
      height: fontSize.fs48,
      minWidth: fontSize.fs160,
    },
  };
  return (
    <HomeStyled>
      <MainSlider />
      <Container>
        <div className="product_overview">
          <h1>Product Overview</h1>
          <div className="options">
            <MenuStyled>
              <ul>
                <li>
                  <a className="active">All clothes</a>
                </li>
                <li>
                  <a>Women</a>
                </li>
                <li>
                  <a>Men</a>
                </li>
              </ul>
            </MenuStyled>
            <div className="buttons">
              <Button
                size="large"
                variant="outlined"
                startIcon={<FilterListIcon />}
              >
                Filter
              </Button>
              <Button
                size="large"
                variant="outlined"
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="cards">
          {sweaters.map((sweater, key) => {
            return (
              <div key={key}>
                <SweaterCard
                  favorites={props.favorites}
                  setFavorites={props.setFavorites}
                  id={key}
                  image={sweater.image}
                  brand={sweater.brand}
                  size={sweater.size}
                  price={sweater.price}
                />
              </div>
            );
          })}
        </div>
        <div className="load_more">
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={button.roundedButton}
          >
            Load More
          </Button>
        </div>
      </Container>
    </HomeStyled>
  );
}

export default Home;
