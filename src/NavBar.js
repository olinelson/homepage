import React from "react";

import { NavLink } from "react-router-dom";

import { Menu, Icon, Modal, Header, Button, Form, Divider, Container, Segment } from "semantic-ui-react"
import { white } from "ansi-colors";

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
                <Button inverted size="massive" href="mailto:olivernelson@icloud.com" basic icon="mail" />
                <Button inverted size="massive" href="http://m.me/oli.nelson1" target="blank" basic icon="facebook" />
                <Button inverted size="massive" href="https://www.linkedin.com/in/oli-nelson" target="blank" basic icon="linkedin" />
              </Container>

              <Divider hidden />
              <Divider horizontal style={{ color: "white" }} >Or</Divider>
              <Divider hidden />

              <h4>Send me a message</h4>
              <Form method="POST" action="https://formspree.io/olivernelson@icloud.com">
                <Form.Input transparent type="email" name="email" placeholder="your_email@example.com" />
                <Form.TextArea transparent name="message" placeholder="It was the best of times; it was the worst of times..." />
                <Button basic inverted type="submit">Send</Button>
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
