import React from "react";

import { Container, Item, Image, Card } from "semantic-ui-react";

import TechnicalSkills from "../TechnicalSkills"

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
      header: 'Inner Wisdom',
      meta: 'Javascript, React, Ruby, Rails, Webpacker',
      description: 'A client booking and management webb app specifically designed for Inner Wisdom Psychology. Built on ruby on rails with views rendered with the webpacker gem and react.',
      extra: <a href="https://www.wisdompsych.com.au/" target='blank'>Check it out</a>

    },
    {
      header: 'Project Report - May',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 34%',
    },
    {
      header: 'Project Report - June',
      description:
        'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
      meta: 'ROI: 27%',
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
          extra={<a
            className="resume-link"
            href="https://docs.google.com/presentation/d/1--AjndSnU3yztOyNebUBDgXGvodAWFGYgK6zKJV3xyg/edit?usp=sharing"
          >
            Click here to view resumé.
        </a>}
        />
      </Item.Group>


      <h1>recent works</h1>
      <Card.Group centered itemsPerRow={3} stackable items={works} />

      <TechnicalSkills />
    </Container>
  );

}
