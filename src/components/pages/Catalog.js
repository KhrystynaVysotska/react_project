import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { getSweaters, applyFilter } from "../../context/actionCreators";
import { useHistory } from "react-router-dom";

function Catalog() {
  const dispatch = useDispatch();
  const selectedSweaters = useSelector((state) => state.sweaters.sweaters);
  const history = useHistory();
  const [sweaters, setSweaters] = useState(selectedSweaters);
  const [searchOpened, setSearchOpened] = useState(false);
  const [filterOpened, setFilterOpened] = useState(false);
  const [seasonTags, setSeasons] = useState(seasons);
  const [genderTags, setGenders] = useState(gender);
  const [materialTags, setMaterials] = useState(material);

  useEffect(() => {
    dispatch(getSweaters());
  }, [dispatch]);

  useEffect(() => {
    setSweaters(selectedSweaters);
  }, [selectedSweaters]);

  const handleFiltered = useCallback(
    (key, value) => {
      const params = new URLSearchParams(window.location.search);
      if (params.has(key)) {
        let values = params.getAll(key);
        if (values.includes(value)) {
          values = values.filter((paramValue) => paramValue !== value);
          params.delete(key);
          values.forEach((value) => {
            params.append(key, value);
          });
        } else {
          params.append(key, value);
        }
      } else {
        params.append(key, value);
      }
      history.push(`?${params}`);
      dispatch(applyFilter(params.toString()));
    },
    [dispatch, history]
  );

  const handleSeasonFilter = ({ season, id }) => {
    handleFiltered("season", season);
    const tags = seasonTags.map((tag) =>
      tag.id === id ? { id: id, selected: !tag.selected, season: season } : tag
    );
    setSeasons(tags);
  };

  const handleMaterialFilter = ({ material, id }) => {
    handleFiltered("material", material);
    const tags = materialTags.map((tag) =>
      tag.id === id
        ? { id: id, selected: !tag.selected, material: material }
        : tag
    );
    setMaterials(tags);
  };

  const handleGenderFilter = ({ gender, id }) => {
    handleFiltered("gender", gender);
    const tags = genderTags.map((tag) =>
      tag.id === id ? { id: id, selected: !tag.selected, gender: gender } : tag
    );
    setGenders(tags);
  };

  const handleChange = (event) => {
    let brand = event.target.value;
    setSweaters(
      selectedSweaters.filter((sweater) => sweater.brandName.includes(brand))
    );
  };

  const handleBlur = (event) => {
    if (event.target.value.length === 0) {
      setSearchOpened(false);
    } else if (event.target.value.match("[\\s]+")) {
      setSearchOpened(false);
      dispatch(getSweaters());
    }
  };

  const toggleFilterOpened = () => {
    if (filterOpened) {
      dispatch(getSweaters());
      history.replace("/catalog");
      setSeasons(seasons);
      setMaterials(material);
      setGenders(gender);
    }
    setFilterOpened(!filterOpened);
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
                  onClick={() => handleSeasonFilter(season)}
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
                  onClick={() => handleGenderFilter(gender)}
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
                  onClick={() => handleMaterialFilter(material)}
                />
              );
            })}
          </div>
        )}
        <CardsStyled>
          {sweaters.map((sweater, index) => {
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
