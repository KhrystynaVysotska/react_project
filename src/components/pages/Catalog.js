import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import CardsStyled from "../styles/Cards.styled.js";
import CatalogStyled from "../styles/Catalog.styled.js";
import Container from "../styles/Container.js";
import SweaterCard from "../SweaterCard.js";
import ProductOverviewPanelStyled from "../styles/ProductOverviewPanel.styled.js";
import MenuStyled from "../styles/Menu.styled.js";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import Button from "@material-ui/core/Button";
import SearchField from "../SearchField.js";
import Chip from "@material-ui/core/Chip";
import { seasons, gender, material } from "../constants/Constants";
import { getSweaters } from "../../context/actionCreators";

function Catalog() {
  const dispatch = useDispatch();
  const sweaters = useSelector((state) => state.sweaters.sweaters);
  const [searchOpened, setSearchOpened] = useState(false);
  const [filterOpened, setFilterOpened] = useState(false);
  const [foundedSweaters, setFoundedSweaters] = useState(sweaters);
  const [seasonTags, setSeasons] = useState(seasons);
  const [genderTags, setGenders] = useState(gender);
  const [materialTags, setMaterials] = useState(material);
  const [collectedTrueKeys, setCollectedTruKeys] = useState({
    gender: [],
    material: [],
    season: [],
  });

  useEffect(() => {
    dispatch(getSweaters());
  }, [dispatch]);

  useEffect(() => {
    const filterKeys = Object.keys(collectedTrueKeys);
    let array = sweaters.filter((sweater) =>
      filterKeys.every((key) => {
        if (collectedTrueKeys[key].length === 0) return true;
        return collectedTrueKeys[key].includes(sweater[key]);
      })
    );
    setFoundedSweaters(array);
  }, [collectedTrueKeys, sweaters]);

  const handleChange = useCallback(
    (event) => {
      let brand = event.target.value;
      setFoundedSweaters(
        sweaters.filter((sweater) => sweater.brand.includes(brand))
      );
    },
    [sweaters]
  );

  const handleBlur = useCallback(
    (event) => {
      if (event.target.value.length === 0) {
        setSearchOpened(false);
      } else if (event.target.value.match("[\\s]+")) {
        setSearchOpened(false);
        setFoundedSweaters(sweaters);
      }
    },
    [sweaters]
  );

  const toggleFilterOpened = () => {
    if (filterOpened) {
      setFoundedSweaters(sweaters);
    }
    setFilterOpened(!filterOpened);
  };

  const handleMaterialFilter = (id, tag) => {
    let array = materialTags.map((material) =>
      material.id === id
        ? { id: id, selected: !material.selected, material: tag }
        : material
    );
    setMaterials(array);
    let material = collectedTrueKeys.material.slice();
    if (!material.includes(tag)) {
      material.push(tag);
    } else {
      material = material.filter((element) => element !== tag);
    }
    setCollectedTruKeys({
      gender: collectedTrueKeys.gender,
      material: material,
      season: collectedTrueKeys.season,
    });
  };

  const handleGenderFilter = (id, tag) => {
    let array = genderTags.map((gender) =>
      gender.id === id
        ? { id: id, selected: !gender.selected, gender: tag }
        : gender
    );
    setGenders(array);
    let gender = collectedTrueKeys.gender.slice();
    if (!gender.includes(tag)) {
      gender.push(tag);
    } else {
      gender = gender.filter((element) => element !== tag);
    }
    setCollectedTruKeys({
      gender: gender,
      material: collectedTrueKeys.material,
      season: collectedTrueKeys.season,
    });
  };

  const handleSeasonFilter = (id, tag) => {
    let array = seasonTags.map((season) =>
      season.id === id
        ? { id: id, selected: !season.selected, season: tag }
        : season
    );
    setSeasons(array);
    let season = collectedTrueKeys.season.slice();
    if (!season.includes(tag)) {
      season.push(tag);
    } else {
      season = season.filter((element) => element !== tag);
    }
    setCollectedTruKeys({
      gender: collectedTrueKeys.gender,
      material: collectedTrueKeys.material,
      season: season,
    });
  };
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
                id="filter"
                size="large"
                variant="outlined"
                startIcon={<FilterListIcon />}
                onClick={toggleFilterOpened}
              >
                Filter
              </Button>
              {!searchOpened && (
                <Button
                  id="search"
                  size="large"
                  variant="outlined"
                  startIcon={<SearchIcon />}
                  onClick={() => setSearchOpened(true)}
                >
                  Search
                </Button>
              )}
              {searchOpened && (
                <SearchField
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              )}
            </div>
          </div>
        </ProductOverviewPanelStyled>
        {filterOpened && (
          <div style={{ height: "30vh", backgroundColor: "#fff" }}>
            <p>Season</p>
            {seasonTags.map((season, index) => {
              return (
                <Chip
                  key={season.id}
                  variant={season.selected ? "default" : "outlined"}
                  color={season.selected ? "primary" : "default"}
                  label={season.season}
                  onClick={() => handleSeasonFilter(season.id, season.season)}
                />
              );
            })}
            <p>Gender</p>
            {genderTags.map((gender, index) => {
              return (
                <Chip
                  key={gender.id}
                  variant={gender.selected ? "default" : "outlined"}
                  color={gender.selected ? "primary" : "default"}
                  label={gender.gender}
                  onClick={() => handleGenderFilter(gender.id, gender.gender)}
                />
              );
            })}
            <p>Material</p>
            {materialTags.map((material, index) => {
              return (
                <Chip
                  key={material.id}
                  variant={material.selected ? "default" : "outlined"}
                  color={material.selected ? "primary" : "default"}
                  label={material.material}
                  onClick={() =>
                    handleMaterialFilter(material.id, material.material)
                  }
                />
              );
            })}
          </div>
        )}
        <CardsStyled>
          {foundedSweaters.map((sweater, index) => {
            return (
              <div
                id={sweater.sweaterId}
                key={`detailed-card-${sweater.sweaterId}`}
              >
                <SweaterCard sweater={sweater} />
              </div>
            );
          })}
        </CardsStyled>
      </CatalogStyled>
    </Container>
  );
}

export default Catalog;
