import React from 'react'
import { Col, Grid, Row, Well } from 'react-bootstrap'

import CharactersConstants from '../constants/characters-constants'

class Characters extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2><span id={CharactersConstants.charactersTitleId}>{CharactersConstants.charactersTitleText}</span></h2>
            <Well>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan libero at arcu feugiat pulvinar.</p>
            </Well>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Characters
