import React from "react";

import { NavLink } from "react-router-dom";

import { Menu, Icon, Modal, Header, Button, Form, Divider, Container } from "semantic-ui-react"

export default function NavBar(props) {

  if (props.location.pathname === "/") return null

  console.log(props.location.pathname)

  return (
    <Menu pointing secondary inverted={props.location.pathname === '/drums'}>
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

        <Modal
          trigger={<Menu.Item icon="mail" content="contact" />}
          basic
          closeIcon
          size='small'
          header={<h1>contact</h1>}
          content={

            <>
              <Container textAlign="center">
                <Button href="mailto:olivernelson@icloud.com" basic inverted icon="mail" />
                <Button href="http://m.me/oli.nelson1" target="blank" basic inverted icon="facebook" />
                <Button href="https://www.linkedin.com/in/oli-nelson" target="blank" basic inverted icon="linkedin" />
              </Container>

              <Divider hidden />
              <Divider horizontal style={{ color: "white" }}>Or</Divider>
              <Divider hidden />

              <h2>Send me a message</h2>
              <Form method="POST" action="https://formspree.io/olivernelson@icloud.com">
                <Form.Input type="email" name="email" placeholder="your_email@example.com" />
                <Form.TextArea name="message" placeholder="Test Message" />
                <Button primary type="submit">Send</Button>
              </Form>
            </>
          }
        />




        <Menu.Item href="https://www.youtube.com/user/MrOlibobo" icon="youtube" />
        <Menu.Item href="https://www.facebook.com/oli.nelson1" icon="facebook" />
        <Menu.Item href="https://www.instagram.com/olinelsondrums/" icon="instagram" />
        <Menu.Item href="https://medium.com/@olinelson93" icon="medium" />
      </Menu.Menu>
    </Menu >
  );
}
