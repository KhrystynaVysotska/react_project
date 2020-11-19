import React from "react";
import CardsStyled from "../styles/Cards.styled.js";
import CatalogStyled from "../styles/Catalog.styled.js";
import Container from "../styles/Container.js";
import { sweaters } from "../Sweaters.js";
import SweaterCard from "../SweaterCard.js";
import ProductOverviewPanelStyled from "../styles/ProductOverviewPanel.styled.js";
import MenuStyled from "../styles/Menu.styled.js";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import Button from "@material-ui/core/Button";

function Catalog(props) {
  return (
    <Container>
      <CatalogStyled>
        <ProductOverviewPanelStyled>
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
        </ProductOverviewPanelStyled>
        <CardsStyled>
          {sweaters.map((sweater, index) => {
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
      </CatalogStyled>
    </Container>
  );
}

export default Catalog;
