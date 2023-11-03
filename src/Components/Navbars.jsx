import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const CustomNavbar = styled(Navbar)`
  background-color: #c1dbc8;
`;

const Logo = styled.img`
  height: 10vh;
  width: 13vw;
`;

const OrderList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin-left: 33px;
  color: black;
  &:hover {
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 5px;
    text-shadow: 13px;
  }
`;

const CustomLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Navbars = () => {
  return (
    <Wrapper>
      <CustomNavbar data-bs-theme="dark" className="navbar-expand-lg navbar">
        <Logo
          className="imagenavbar"
          alt="imgs=logo"
          src="https://thecollectionindia.com/cdn/shop/files/logo_1.jpg?crop=center&height=284&v=1677157134&width=1628"
        />
        <OrderList className="orderlist mr-auto">
          <ListItem>
            <CustomLink to="/">Home</CustomLink>
          </ListItem>

          <ListItem>
            <CustomLink to="/products">Products</CustomLink>
          </ListItem>
        </OrderList>
      </CustomNavbar>
    </Wrapper>
  );
};

export default Navbars;
