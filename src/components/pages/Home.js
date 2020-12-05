import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { getSweaters } from "../../context/actionCreators";
import MainSlider from "../slider/MainSlider.js";
import LoadMoreButtonStyled from "../styles/LoadMoreButton.styled.js";
import ProductOverviewPanelStyled from "../styles/ProductOverviewPanel.styled.js";
import MenuStyled from "../styles/Menu.styled.js";
import CardsStyled from "../styles/Cards.styled.js";
import Container from "../styles/Container.js";
import Button from "@material-ui/core/Button";
import SweaterDescriptionCard from "../SweaterDescriptionCard.js";
import { fontSize } from "../constants/Constants.js";

function Home() {
  const [elementsToShow, setElementsToShow] = useState(3);
  const dispatch = useDispatch();
  const sweaters = useSelector((state) => state.sweaters.sweaters);

  useEffect(() => {
    dispatch(getSweaters());
  }, [dispatch]);

  const button = {
    roundedButton: {
      borderRadius: fontSize.fs24,
      height: fontSize.fs48,
      minWidth: fontSize.fs160,
    },
  };
  const handleLoadMore = () => {
    const elemToScrollTo = document.getElementById(sweaters[0].sweaterId);
    elemToScrollTo.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    elementsToShow === 3
      ? setElementsToShow(sweaters.length)
      : setElementsToShow(3);
  };
  return (
    <>
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
              <div id={sweater.sweaterId} key={`card-${sweater.sweaterId}`}>
                <SweaterDescriptionCard sweater={sweater} />
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
    </>
  );
}

export default Home;
