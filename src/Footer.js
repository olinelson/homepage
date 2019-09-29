import React from "react";
import { Icon } from "semantic-ui-react"
import styled from 'styled-components'

export default function Footer(props) {

  const FooterContainer = styled.div`
    height: 40vh;
    display: grid;
    justify-items: center;
    align-items: center;
    background: rgba(0,0,0,0);
    color: ${props => props.location.pathname === "/drums" ? "white" : "black"}
  `

  if (props.location.pathname === "/") return null

  return (
    <FooterContainer {...props}>
      <p>
        <Icon name={"copyright"} /> Oli Nelson {new Date().getFullYear()}
      </p>
    </FooterContainer>
  );
}
