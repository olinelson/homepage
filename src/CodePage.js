import React from "react";

import { Container, Item, Image, Card, Icon, Menu, Divider } from "semantic-ui-react";

import TechnicalSkills from "./TechnicalSkills"

export default function CodePage() {
  const bio = `
  Full stack web developer with a passion for innovation and efficiency.
  With experience in Ruby on Rails, JavaScript, React and a background
  in music, I discovered web development through intense personal
  curiosity that then motivated me to seek accredited training with the
  Flatiron school.I bring strong skills in project management, problem
  solving and creativity that help innovative companies to create
  efficient and effective products.As an established musician, I am
  very comfortable as a self - directed learner and I understand the long
  term benefits of practice, patience and persistence when building
  skills and developing unique products.`

  const works = [
    {
      image: 'images/inner-wisdom-placeit.jpg',
      href: 'https://www.wisdompsych.com.au/',
      header: 'Inner Wisdom',
      meta: 'Javascript, React, Ruby, Rails, Webpacker',
      description: 'A client booking and management webb app specifically designed for Inner Wisdom Psychology. Built on ruby on rails with views rendered with the webpacker gem and react.',
      extra: <Menu fluid borderless compact secondary stackable>
        <Menu.Item href="https://www.wisdompsych.com.au/" target='blank'><Icon name="chain" />Live</Menu.Item>
      </Menu>
    },
    {
      image: 'images/chat-app.png',
      href: 'https://olinelson-weather-app.herokuapp.com/',
      header: 'Chat APP',
      meta: 'Node.js, Socket.io, Javascript, Mustache',
      description: 'A 90s style real time chat room application built with Node.js and Socket.io. Users can join chat rooms, send messages to users and share their location.',
      extra: <Menu fluid borderless compact secondary stackable>
        <Menu.Item href="https://github.com/olinelson/weather" target='blank'><Icon name="github" />GitHub</Menu.Item>
        <Menu.Item href="https://olinelson-weather-app.herokuapp.com/" target='blank'><Icon name="chain" />Live</Menu.Item>
      </Menu>
    },
    {
      image: 'images/weather-app.png',
      href: 'https://olinelson-weather-app.herokuapp.com/',
      header: 'Weather',
      meta: 'Node.js, Handlebars, Javascript, CSS, Dark Sky API',
      description: 'A super simple weather forecast app built with Node.js. Can search by city/town name or get the users current location',
      extra: <Menu fluid borderless compact secondary stackable>
        <Menu.Item href="https://github.com/olinelson/weather" target='blank'><Icon name="github" />GitHub</Menu.Item>
        <Menu.Item href="https://olinelson-weather-app.herokuapp.com/" target='blank'><Icon name="chain" />Live</Menu.Item>
      </Menu>
    },
    {
      image: 'images/transcribrScreeNshot.png',
      href: 'http://www.transcribrapp.com/',
      header: 'Transcribr App',
      description: 'This project was born out of my fiancé’s frustration at not being able to search her podcasts by text. Users upload any video, audio file or paste in a youtube link and the app will transcribe it for them, providing a clickable transcript.',
      meta: 'Ruby, Rails, JavaScript, React',
      extra: <Menu fluid borderless compact secondary stackable>
        <Menu.Item href="http://www.transcribrapp.com/" target='blank'><Icon name="chain" />Live</Menu.Item>
        <Menu.Item href="https://github.com/olinelson/transcribr" target='blank'><Icon name="github" />GitHub</Menu.Item>
      </Menu>
    },
    {
      image: 'images/antipodes.jpg',
      href: 'https://antipodesband.com/',
      header: 'Antipodes',
      description: 'TThis is a simple one page site for the australian based band Antipodes. I had a lot of fun finding some new react plugins to add some slick animations. I also enjoyed sinking my teeth into Semantic Ui React.',
      meta: 'JavaScript, React',
      extra: <Menu fluid borderless compact secondary stackable>
        <Menu.Item href="https://antipodesband.com/" target='blank'><Icon name="chain" />Live</Menu.Item>
        <Menu.Item href="https://github.com/olinelson/antipodes" target='blank'><Icon name="github" />GitHub</Menu.Item>
      </Menu>
    },

  ]



  return (
    <Container>
      <h1 style={{ fontSize: "4rem" }}>Oli Nelson</h1>
      <Item.Group>
        <Item
          header={<h1>about</h1>}
          image={<Image src="images/headshot.jpg" size="medium" />}
          description={bio}
          meta={<a
            className="resume-link"
            href="https://docs.google.com/presentation/d/1--AjndSnU3yztOyNebUBDgXGvodAWFGYgK6zKJV3xyg/edit?usp=sharing"
          >
            Click here to view resumé.
        </a>}
        />
      </Item.Group>

      <Divider hidden />
      <h1>recent projects</h1>
      <Card.Group centered itemsPerRow={3} stackable items={works} />

      <Divider hidden />
      <TechnicalSkills />
    </Container>
  );

}
