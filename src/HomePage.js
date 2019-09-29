import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components"

const HeroBanner = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  *{
    color: black;
  }
`

export default function HomePage() {

  return <HeroBanner>
    <NavLink to={"/code"}><h1>Code</h1></NavLink>
    <NavLink to={"/drums"}><h1>Drums</h1></NavLink>
  </HeroBanner>
}
