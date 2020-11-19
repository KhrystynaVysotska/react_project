import React, { useState } from "react";
import MainSlider from "../slider/MainSlider.js";
import LoadMoreButtonStyled from "../styles/LoadMoreButton.styled.js";
import ProductOverviewPanelStyled from "../styles/ProductOverviewPanel.styled.js";
import MenuStyled from "../styles/Menu.styled.js";
import CardsStyled from "../styles/Cards.styled.js";
import Container from "../styles/Container.js";
import Button from "@material-ui/core/Button";
import SweaterCard from "../SweaterCard.js";
import { sweaters } from "../Sweaters.js";
import { fontSize } from "../constants/Constants.js";

function Home(props) {
  const [elementsToShow, setElementsToShow] = useState(3);
  const button = {
    roundedButton: {
      borderRadius: "23px",
      height: fontSize.fs48,
      minWidth: fontSize.fs160,
    },
  };
  const handleLoadMore = () => {
    const elemToScrollTo = document.getElementById(0);
    elemToScrollTo.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    elementsToShow === 3
      ? setElementsToShow(sweaters.length)
      : setElementsToShow(3);
  };
  return (
    <div>
      <MainSlider />
      <Container>
        <ProductOverviewPanelStyled>
          <h1>Product Overview</h1>
          <div className="options">
            <MenuStyled>
              <ul>
                <li>
                  <a href="/#" className="active">
                    All clothes
                  </a>
                </li>
                <li>
                  <a href="/#">Women</a>
                </li>
                <li>
                  <a href="/#">Men</a>
                </li>
              </ul>
            </MenuStyled>
          </div>
        </ProductOverviewPanelStyled>
        <CardsStyled>
          {sweaters.slice(0, elementsToShow).map((sweater, index) => {
            return (
              <div id={sweater.id} key={sweater.id}>
                <SweaterCard
                  favorites={props.favorites}
                  setFavorites={props.setFavorites}
                  id={sweater.id}
                  image={sweater.image}
                  brand={sweater.brand}
                  size={sweater.size}
                  price={sweater.price}
                />
              </div>
            );
          })}
        </CardsStyled>
        <LoadMoreButtonStyled>
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={button.roundedButton}
            onClick={() => handleLoadMore()}
          >
            {elementsToShow === 3 ? "Load More" : "Show Less"}
          </Button>
        </LoadMoreButtonStyled>
      </Container>
    </div>
  );
}

export default Home;
