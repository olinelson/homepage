import React from 'react'

import {
  Container,
  Item,
  Image,
  Card,
  Icon,
  Menu,
  Divider
} from 'semantic-ui-react'

import TechnicalSkills from './TechnicalSkills'

export default function CodePage () {
  const bio = `
 Full stack developer with a passion for innovation and efficiency. With experience in Ruby on Rails, Node.js, JavaScript, TypeScript, React and a background in music, I discovered web development through intense personal curiosity that then motivated me to seek accredited training with the Flatiron school. I bring strong skills in project management, problem solving and creativity that help innovative companies to create efficient and effective products. As an established musician, I am very comfortable as a self-directed learner and I understand the long term benefits of practice, patience and persistence when building skills and developing unique products.`

  const clientWork = [
    {
      image: 'images/inner-wisdom-placeit.jpg',
      href: 'https://www.wisdompsych.com.au/',
      header: 'Inner Wisdom',
      meta: 'Javascript, React, Ruby, Rails, Webpacker',
      description:
        'A client booking and management web app specifically designed for Inner Wisdom Psychology.',
      extra: (
        <Menu fluid borderless compact secondary stackable>
          <Menu.Item href='https://www.wisdompsych.com.au/' target='_blank'>
            <Icon name='chain' />
            Live
          </Menu.Item>
          <Menu.Item
            href='https://github.com/olinelson/inner-wisdom'
            target='_blank'
          >
            <Icon name='github' />
            GitHub
          </Menu.Item>
        </Menu>
      )
    },
    {
      image: 'images/antipodes.jpg',
      href: 'https://antipodesband.com/',
      header: 'Antipodes',
      description:
        'This is a simple one page site for the australian based band Antipodes. I had a lot of fun finding some new react plugins to add some slick animations. I also enjoyed sinking my teeth into Semantic Ui React.',
      meta: 'JavaScript, React',
      extra: (
        <Menu fluid borderless compact secondary stackable>
          <Menu.Item href='https://antipodesband.com/' target='_blank'>
            <Icon name='chain' />
            Live
          </Menu.Item>
          <Menu.Item
            href='https://github.com/olinelson/antipodes'
            target='_blank'
          >
            <Icon name='github' />
            GitHub
          </Menu.Item>
        </Menu>
      )
    },
    {
      image: 'images/mum.png',
      href: 'https://deborahdegraaff.com',
      header: 'Deborah de Graaff',
      description:
        'The homepage for Sydney based clarinetist Deborah de Graaff',
      meta: 'JavaScript, React',
      extra: (
        <Menu fluid borderless compact secondary stackable>
          <Menu.Item href='https://deborahdegraaff.com' target='_blank'>
            <Icon name='chain' />
            Live
          </Menu.Item>
          <Menu.Item
            href='https://github.com/olinelson/deborah-de-graaff'
            target='_blank'
          >
            <Icon name='github' />
            GitHub
          </Menu.Item>
        </Menu>
      )
    }
  ]
  const projectWork = [
    {
      image: '/images/foto.jpg',
      href: 'https://photo-viewer-64843.web.app/',
      header: 'Foto.',
      description: 'A very pretty photo viewer',
      meta: 'React, Unsplash',
      extra: (
        <Menu fluid borderless compact secondary stackable>
          <Menu.Item href='https://photo-viewer-64843.web.app/' target='_blank'>
            <Icon name='chain' />
            Live
          </Menu.Item>
          <Menu.Item
            href='https://github.com/olinelson/photo-viewer'
            target='_blank'
          >
            <Icon name='github' />
            GitHub
          </Menu.Item>
        </Menu>
      )
    },
    {
      image: '/images/calculator1.png',
      href: 'https://calculator-3f562.web.app/',
      header: 'Calculator',
      description: 'A simple calculator based on the stock macOs app',
      meta: 'Vue, Quasar, LocalBase',
      extra: (
        <Menu fluid borderless compact secondary stackable>
          <Menu.Item href='https://calculator-3f562.web.app/' target='_blank'>
            <Icon name='chain' />
            Live
          </Menu.Item>
          <Menu.Item
            href='https://github.com/olinelson/calculator'
            target='_blank'
          >
            <Icon name='github' />
            GitHub
          </Menu.Item>
        </Menu>
      )
    },
    {
      image: '/images/snake1.png',

      href: 'http://olinelson.github.io/react_snake',
      header: 'React Snake',
      description:
        'A simple, react version of the classic snake game on those old Nokia phones.',
      meta: 'React.js',
      extra: (
        <Menu fluid borderless compact secondary stackable>
          <Menu.Item
            href='http://olinelson.github.io/react_snake'
            target='_blank'
          >
            <Icon name='chain' />
            Live
          </Menu.Item>
          <Menu.Item
            href='https://github.com/olinelson/react_snake'
            target='_blank'
          >
            <Icon name='github' />
            GitHub
          </Menu.Item>
        </Menu>
      )
    },
    {
      image: 'images/transcribr2.png',
      href: 'http://www.transcribrapp.com/',
      header: 'Transcribr App',
      description:
        'Transcribe any audio or video file, search by transcript, export docx and text files and more!',
      meta: 'Node.js, Socket.io, Google Speech To Text, React , Gatsby.js',
      extra: (
        <Menu fluid borderless compact secondary stackable>
          <Menu.Item href='http://www.transcribrapp.com/' target='_blank'>
            <Icon name='chain' />
            Live
          </Menu.Item>
          <Menu.Item
            href='https://github.com/olinelson/transcribr2'
            target='_blank'
          >
            <Icon name='github' />
            GitHub
          </Menu.Item>
        </Menu>
      )
    }

    // {
    //   image: 'images/chat-app.png',
    //   href: 'https://olinelson-chat-app.herokuapp.com/',
    //   header: 'Chat APP',
    //   meta: 'Node.js, Socket.io, Javascript, Mustache',
    //   description:
    //     'A 90s style real time chat room application built with Node.js and Socket.io. Users can join chat rooms, send messages to users and share their location.',
    //   extra: (
    //     <Menu fluid borderless compact secondary stackable>
    //       <Menu.Item href='https://github.com/olinelson/weather' target='_blank'>
    //         <Icon name='github' />
    //         GitHub
    //       </Menu.Item>
    //       <Menu.Item
    //         href='https://olinelson-weather-app.herokuapp.com/'
    //         target='_blank'
    //       >
    //         <Icon name='chain' />
    //         Live
    //       </Menu.Item>
    //     </Menu>
    //   )
    // }
    // {
    //   image: 'images/weather-app.png',
    //   href: 'https://olinelson-weather-app.herokuapp.com/',
    //   header: 'Weather',
    //   meta: 'Node.js, Handlebars, Javascript, CSS, Dark Sky API',
    //   description:
    //     'A super simple weather forecast app built with Node.js. Can search by city/town name or get the users current location',
    //   extra: (
    //     <Menu fluid borderless compact secondary stackable>
    //       <Menu.Item href='https://github.com/olinelson/weather' target='_blank'>
    //         <Icon name='github' />
    //         GitHub
    //       </Menu.Item>
    //       <Menu.Item
    //         href='https://olinelson-weather-app.herokuapp.com/'
    //         target='_blank'
    //       >
    //         <Icon name='chain' />
    //         Live
    //       </Menu.Item>
    //     </Menu>
    //   )
    // }
    // {
    //   image: "images/transcribrScreeNshot.png",
    //   href: "http://www.transcribrapp.com/",
    //   header: "Transcribr App",
    //   description:
    //     "This project was born out of my fiancé’s frustration at not being able to search her podcasts by text. Users upload any video, audio file or paste in a youtube link and the app will transcribe it for them, providing a clickable transcript.",
    //   meta: "Ruby, Rails, JavaScript, React",
    //   extra: (
    //     <Menu fluid borderless compact secondary stackable>
    //       <Menu.Item href='http://www.transcribrapp.com/' target='_blank'>
    //         <Icon name='chain' />
    //         Live
    //       </Menu.Item>
    //       <Menu.Item
    //         href='https://github.com/olinelson/transcribr'
    //         target='_blank'
    //       >
    //         <Icon name='github' />
    //         GitHub
    //       </Menu.Item>
    //     </Menu>
    //   )
    // }
  ]

  return (
    <Container>
      <h1 style={{ fontSize: '4rem' }}>Oli Nelson</h1>
      <Item.Group>
        <Item
          header={<h1>about</h1>}
          image={<Image src='images/headshot.jpg' size='medium' />}
          description={bio}
          meta={
            <a
              target='_blank'
              className='resume-link'
              href='https://docs.google.com/document/d/1w-oxAaiwLc9dsF-rGCAhDQq5PlgLqZaijDQu_80sqIE/edit?usp=sharing'
            >
              Click here to view resumé.
            </a>
          }
        />
      </Item.Group>

      <Divider hidden />
      <h1>recent projects</h1>
      <Card.Group itemsPerRow={3} stackable items={projectWork} />

      <h1>recent clients</h1>
      <Card.Group itemsPerRow={3} stackable items={clientWork} />

      <Divider hidden />
      <TechnicalSkills />
    </Container>
  )
}
