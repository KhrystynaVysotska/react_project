import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "../styles/Container.js";
import CartNavigationStyled from "../styles/CartNavigation.styled.js";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function Cart() {
  const sweatersInCart = useSelector((state) => state.selected.selected);
  const sweaters = useSelector((state) => state.sweaters.sweaters);
  const [selectedSweaters, setSelectedSweaters] = useState([]);

  useEffect(() => {
    const sweaters_array = Object.keys(sweatersInCart).map((sweaterId) => {
      return sweaters.filter((sweater) => sweater.sweaterId == sweaterId)[0];
    });
    setSelectedSweaters(sweaters_array);
  }, [sweatersInCart, sweaters]);

  return (
    <Container>
      <CartNavigationStyled>
        <Link to="/catalog" className="back_page">
          Catalog
        </Link>
        <p className="pointer"> > </p>
        <p className="current_page"> Cart </p>
      </CartNavigationStyled>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedSweaters.map((sweater) => (
            <TableRow key={sweater.sweaterId}>
              <TableCell component="th" scope="row">
                {sweater.brandName}
              </TableCell>
              <TableCell align="right">$ {sweater.priceInUah}</TableCell>
              <TableCell align="right">
                {sweatersInCart[sweater.sweaterId]}
              </TableCell>
              <TableCell align="right">
                $ {sweater.priceInUah * sweatersInCart[sweater.sweaterId]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default Cart;
