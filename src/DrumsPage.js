import React from "react";
import { Item, Image, Container, Icon, Divider } from 'semantic-ui-react'

import styled from 'styled-components'

const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  grid-gap: 1rem;
  justify-items: center;
  `
const bio = `
    Oli Nelson is an acclaimed Australian drummer from Sydney Australia,
    now based in New York City. He has performed alongside leading jazz
    artists including Arturo Sandoval, James Muller, Mike Nock, Gian
    Slater, Kristin Berardi, and the Jazzgroove Mothership Orchestra. In
    2016, he played on both the Sydney Conservatorium Big Band’s album
    ‘Okay’ featuring James Muller (54 Records), and Hieronymus Trio’s
    debut album, both recorded at renowned Systems Two studios in New
    York. As a member of Hieronymus Trio, he also recorded at the ABC
    (‘Where the Rest of the World Begins’ - 54 Records 2017), performed at
    the Sydney Conservatorium International Jazz Festival (2017), and the
    Freedman Jazz Finals held at the Sydney Opera House (2017). Oli has
    appeared at major jazz venues across Australia as well as touring
    internationally, including with the Sydney Conservatorium Big Band,
    who performed at the prestigious Midwest Clinic in Chicago IL on their
    2015/16 USA tour. He is known as a versatile and innovative artist who
    enjoys performing both ‘within’ and ‘on the edges’ of the jazz and
    improvised dialects.
  `

export default function DrumsPage() {


  return <Container style={{ background: 'black', color: 'white' }} >
    <h1 style={{ fontSize: "4rem" }}>Oli Nelson</h1>

    <Item.Group>
      <Item
        style={{ color: 'white' }}
        header={<h1 color="white">about</h1>}
        image={<Image size='medium' src='images/promo1.jpg' />}
        meta={<>
          <Icon color="red" size="large" href="https://www.youtube.com/user/MrOlibobo" name="youtube" />
          <Icon color="red" size="large" href="https://www.facebook.com/oli.nelson1" name="facebook" />
          <Icon color="red" size="large" href="https://www.instagram.com/olinelsondrums/" name="instagram" />
          <Icon color="red" size="large" href="https://medium.com/@olinelson93" icon="medium" />
        </>}
        description={<p style={{ color: 'white' }}>{bio}</p>}
      />
    </Item.Group>

    {/* <AlbumGrid /> */}

    <AlbumGrid>
      <Image size="medium" alt="where the rest of the world begins album cover" src="images/wtrotwb.jpg" href="https://54records.com.au/hieronymus-trio-where-the-rest-of-the-world-begins" />
      <Image size="medium" href="https://trashcandream.bandcamp.com/track/out-on-the-sea-single-release" alt="trash can dream album cover" src="images/tcd.jpg" />
      <Image size="medium" href="https://54records.com.au/james-muller-big-band-okay" alt="sydney conservatorium jazz orchestra album cover" src="images/scjo.jpg" />
      <Image size="medium" alt="hieronymus trio album cover" href="https://hieronymustrio.bandcamp.com/releases" src="images/hrt.jpg" />
    </AlbumGrid>

    <Divider hidden />

    <Container style={{ background: "rgba(0,0,0,0)" }} text>
      <blockquote cite='delarue | New York Music Daily'>Fearlessly individualistic talent who defies easy categorization</blockquote>

      <blockquote cite='John Mcbeath | Toy Piano Records'>An astonishing big band made up of some of Australia’s most
          accomplished young lions</blockquote>

      <blockquote cite='Lynette Irwin | Scenestr.'>The band was fuelled by the formidable talent of drummer Oli Nelson</blockquote>

      <blockquote cite=' John Shand | The Sydney Morning Herald'> This has such a fragile, diaphanous beauty that I sometimes had to
          remind myself to breathe as I listened</blockquote>

    </Container>

  </Container>

}
