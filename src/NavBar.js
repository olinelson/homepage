import React from "react";

import { NavLink } from "react-router-dom";

import { Menu, Icon } from "semantic-ui-react"

export default function NavBar(props) {

  if (props.location.pathname === "/") return null

  console.log(props.location.pathname)

  return (
    <Menu pointing secondary inverted={props.location.pathname === '/drums'}>
      {/* <Menu.Item
        as={NavLink}
        to="/"
        active={false}
      > */}
      {/* <h4>oli nelson</h4>
      </Menu.Item> */}

      <Menu.Item as={NavLink}
        to="/code"
        active={props.location.pathname === '/code'}

      >
        code
      </Menu.Item>

      <Menu.Item as={NavLink}
        to="/drums"
        active={props.location.pathname === '/drums'}

      >
        drums
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item color="red" href="https://www.youtube.com/user/MrOlibobo" icon="youtube" />
        <Menu.Item color="red" href="https://www.facebook.com/oli.nelson1" icon="facebook" />
        <Menu.Item color="red" href="https://www.instagram.com/olinelsondrums/" icon="instagram" />
        <Menu.Item color="red" href="https://medium.com/@olinelson93" icon="medium" />
      </Menu.Menu>
    </Menu >
  );
}
