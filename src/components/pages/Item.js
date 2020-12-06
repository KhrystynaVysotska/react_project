import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemStyled from "../styles/Item.styled";
import ModalStyled from "../styles/Modal.styled";
import CustomizedCloseIcon from "../styles/CustomizedCloseIcon";
import ItemPreviewStyled from "../styles/ItemPreview.styled";
import InfoStyled from "../styles/Info.styled.js";
import ChipStyled from "../styles/Chip.styled.js";
import Slider from "react-slick";
import { itemPreview } from "../constants/Constants";
import Avatar from "@material-ui/core/Avatar";
import CriteriaSelect from "../pages/CriteriaSelect";
import CriteriaSelectStyled from "../styles/CriteriaSelect.styled.js";
import Button from "@material-ui/core/Button";
import { fontSize } from "../constants/Constants";

function Item() {
  const selectedSweater = useSelector((state) => state.sweaters.sweaters);
  const { id } = useParams();
  let history = useHistory();
  const [sweater, setSweater] = useState(
    selectedSweater.filter((sweater) => sweater.sweaterId == id)[0]
  );
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    setSweater(selectedSweater.filter((sweater) => sweater.sweaterId == id)[0]);
  }, [selectedSweater, id]);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={itemPreview[i].url} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const button = {
    roundedButton: {
      borderRadius: fontSize.fs24,
      height: fontSize.fs48,
      minWidth: fontSize.fs160,
    },
  };

  return (
    <ItemStyled onClick={back}>
      <CustomizedCloseIcon fontSize="large" onClick={back} />
      <ModalStyled onClick={(e) => e.stopPropagation()}>
        <ItemPreviewStyled>
          <Slider {...settings}>
            {itemPreview.map((slide, key) => {
              return (
                <div key={key}>
                  <img src={slide.url} alt="slide" />
                </div>
              );
            })}
          </Slider>
        </ItemPreviewStyled>
        <InfoStyled>
          <ChipStyled
            label={sweater.season.toLowerCase()}
            variant="outlined"
            avatar={<Avatar>S</Avatar>}
          />
          <ChipStyled
            label={sweater.material}
            variant="outlined"
            avatar={<Avatar>M</Avatar>}
          />
          <h1>{sweater.brandName}</h1>
          <h3>${sweater.priceInUah}</h3>
          <p>
            Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.
            Mauris consequat ornare feugiat.
          </p>
          <CriteriaSelectStyled>
            <CriteriaSelect
              label="Size"
              state={size}
              handleChange={handleSizeChange}
              fields={[
                { id: 0, value: 38 },
                { id: 1, value: 39 },
                { id: 2, value: 40 },
                { id: 3, value: 42 },
              ]}
            />
          </CriteriaSelectStyled>
          <CriteriaSelectStyled>
            <CriteriaSelect
              label="Color"
              state={color}
              handleChange={handleColorChange}
              fields={[
                { id: 0, value: "Red" },
                { id: 1, value: "Blue" },
                { id: 2, value: "White" },
                { id: 3, value: "Grey" },
              ]}
            />
          </CriteriaSelectStyled>
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={button.roundedButton}
          >
            Add to cart
          </Button>
        </InfoStyled>
      </ModalStyled>
    </ItemStyled>
  );
}

export default Item;
