import React from "react";
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(6rem, 1fr) );
  justify-items: center;
  grid-gap: 1rem;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
  align-items: center;
`

export default function TechnicalSkills() {
  return <>
    <h1>technical skills</h1>
    <IconGrid>
      <IconContainer>
        <Icon name="gem" />
        Ruby
      </IconContainer>

      <IconContainer>
        <Icon name="js" />
        JavaScript
      </IconContainer>

      <IconContainer>
        <Icon name="html5" />
        html5
      </IconContainer>

      <IconContainer>
        <Icon name="css3 alternate" />
        css3
      </IconContainer>

      <IconContainer>
        <Icon name="react" />
        react
      </IconContainer>

      <IconContainer>
        <Icon name="vuejs" />
        vuejs
      </IconContainer>

      <IconContainer>
        ruby on rails
      </IconContainer>

      <IconContainer>
        sails.js
      </IconContainer>

      <IconContainer>
        <Icon size="large" name="node" />
      </IconContainer>

      <IconContainer>
        typescript
      </IconContainer>

      <IconContainer>
        handlebars
      </IconContainer>

      <IconContainer>
        mustache
      </IconContainer>

      <IconContainer>
        MongoDB
      </IconContainer>

      <IconContainer>
        socket.io
      </IconContainer>

      <IconContainer>
        bootstrap
      </IconContainer>

      <IconContainer>
        semantic ui
      </IconContainer>

      <IconContainer>
        <Icon size="large" name="git" />
      </IconContainer>

      <IconContainer>
        <Icon name="google" />
        google cloud
      </IconContainer>

      <IconContainer>
        postgresql
      </IconContainer>

      <IconContainer>
        sqlite
      </IconContainer>

      <IconContainer>
        redux
      </IconContainer>

      <IconContainer>
        jwt
      </IconContainer>





    </IconGrid>
  </>
}
