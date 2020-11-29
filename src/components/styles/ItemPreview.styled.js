import styled from "styled-components";

const ItemPreviewStyled = styled.div`
  width: 50%;
  position: relative;
  justify-content: space-between;
  .slick-slider {
    width: 80%;
    position: relative;
  }
  .slick-slide {
    width: 472px;
    height: 100%;
    position: relative;
    left: 0;
    top: 0;
    img {
      width: 100%;
      vertical-align: middle;
      border-style: none;
    }
  }
  .slick-dots {
    position: static;
    li {
      width: 25%;
      height: 25%;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
`;

export default ItemPreviewStyled;
