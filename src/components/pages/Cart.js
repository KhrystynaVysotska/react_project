import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../styles/Container.js";
import TableStyled from "../styles/CustomTable.styled";
import TotalAmountStyled from "../styles/TotalAmount.styled";
import CartNavigationStyled from "../styles/CartNavigation.styled.js";
import GoToCheckoutButton from "../styles/GoToCheckoutButton.styled.js";
import { Link } from "react-router-dom";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Counter from "../Counter";
import { addToCart, removeFromCart } from "../../context/actionCreators";
import sweater1 from "../../images/sweater1.jpg";
import { fontSize } from "../constants/Constants";
import Button from "@material-ui/core/Button";

function Cart() {
  const sweatersInCart = useSelector((state) => state.selected.selected);
  const sweaters = useSelector((state) => state.sweaters.sweaters);
  const [selectedSweaters, setSelectedSweaters] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const sweaters_array = Object.keys(sweatersInCart).map((sweaterId) => {
      return sweaters.filter((sweater) => sweater.sweaterId == sweaterId)[0];
    });
    setSelectedSweaters(sweaters_array);
  }, [sweatersInCart, sweaters]);

  const totalAmount = useMemo(() => {
    return selectedSweaters.reduce(function (accumulator, sweater) {
      return (
        accumulator + sweater.priceInUah * sweatersInCart[sweater.sweaterId]
      );
    }, 0);
  }, [selectedSweaters]);

  const increment = useCallback(
    (sweaterId, numberOfItems) => {
      dispatch(addToCart(sweaterId, numberOfItems + 1));
    },
    [dispatch]
  );

  const decrement = useCallback(
    (sweaterId, numberOfItems) => {
      numberOfItems > 1
        ? dispatch(addToCart(sweaterId, numberOfItems - 1))
        : dispatch(removeFromCart(sweaterId));
    },
    [dispatch]
  );

  const button = {
    roundedButton: {
      borderRadius: fontSize.fs24,
      height: fontSize.fs48,
      minWidth: fontSize.fs160,
    },
  };

  return (
    <Container>
      <CartNavigationStyled>
        <Link to="/catalog" className="back_page">
          Catalog
        </Link>
        <p className="pointer"> > </p>
        <p className="current_page"> Cart </p>
      </CartNavigationStyled>
      <TableStyled aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedSweaters.map((sweater) => (
            <TableRow key={sweater.sweaterId}>
              <TableCell className="column-1">
                <img src={sweater1} alt="product" />
              </TableCell>
              <TableCell className="column-2">{sweater.brandName}</TableCell>
              <TableCell align="right" className="column-3">
                $ {sweater.priceInUah}
              </TableCell>
              <TableCell className="column-4">
                <Counter
                  number={sweatersInCart[sweater.sweaterId]}
                  increment={() =>
                    increment(
                      sweater.sweaterId,
                      sweatersInCart[sweater.sweaterId]
                    )
                  }
                  decrement={() =>
                    decrement(
                      sweater.sweaterId,
                      sweatersInCart[sweater.sweaterId]
                    )
                  }
                />
              </TableCell>
              <TableCell align="right" className="column-5">
                $ {sweater.priceInUah * sweatersInCart[sweater.sweaterId]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableStyled>
      <TotalAmountStyled>
        <p className="label">Total amount:</p>
        <p className="amount">$ {totalAmount}</p>
      </TotalAmountStyled>
      <GoToCheckoutButton>
        <Button
          size="large"
          variant="contained"
          color="primary"
          style={button.roundedButton}
        >
          {totalAmount !== 0 ? "Proceed to checkout" : "Shop now"}
        </Button>
      </GoToCheckoutButton>
    </Container>
  );
}

export default Cart;
