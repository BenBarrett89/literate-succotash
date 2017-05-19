import React from 'react'
import PropTypes from 'prop-types'
import { Col, Panel } from 'react-bootstrap'

class Character extends React.Component {
  render () {
    return (
      <Col xs={12} sm={6} md={4}>
        <Panel header={this.props.character.name} bsStyle='primary'>
          <p>Description: {this.props.character.description}</p>
        </Panel>
      </Col>
    )
  }
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.description
  })
}

export default Character
