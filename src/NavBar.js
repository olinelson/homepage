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

          closeIcon
          // size='small'
          header='contact'
          content={

            <Container text>
              <Divider hidden />

              <Container textAlign="center">
                <Button size="massive" href="mailto:olivernelson@icloud.com" icon="mail" />
                <Button size="massive" href="http://m.me/oli.nelson1" target="blank" icon="facebook" />
                <Button size="massive" href="https://www.linkedin.com/in/oli-nelson" target="blank" icon="linkedin" />
              </Container>

              <Divider hidden />
              <Divider horizontal  >Or</Divider>
              <Divider hidden />

              <h4>Send me a message</h4>
              <Form method="POST" action="https://formspree.io/olivernelson@icloud.com">
                <Form.Input type="email" name="email" placeholder="your_email@example.com" />
                <Form.TextArea name="message" placeholder="It was the best of times; it was the worst of times..." />
                <Button type="submit">Send</Button>
              </Form>
              <Divider hidden />
            </Container>
          }
        />




        <Menu.Item href="https://github.com/olinelson" icon="github" />
        <Menu.Item href="https://www.youtube.com/user/MrOlibobo" icon="youtube" />
        <Menu.Item href="https://www.facebook.com/oli.nelson1" icon="facebook" />
        <Menu.Item href="https://www.instagram.com/olinelsondrums/" icon="instagram" />
        <Menu.Item href="https://medium.com/@olinelson93" icon="medium" />
      </Menu.Menu>
    </Menu >
  );
}
