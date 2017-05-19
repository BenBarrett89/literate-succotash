import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Button, Col, Panel } from 'react-bootstrap'

class Character extends React.Component {
  render () {
    return (
      <Col xs={12} sm={6} md={4}>
        <Panel header={this.props.character.name} bsStyle='primary'>
          <Accordion>
            <Panel header='Description' eventKey='1'>{this.props.character.description}</Panel>
          </Accordion>
          <Button bsStyle='danger' block onClick={() => this.props.delete(this.props.character.id)}>Delete</Button>
        </Panel>
      </Col>
    )
  }
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.description
  }),
  delete: PropTypes.func
}

export default Character
