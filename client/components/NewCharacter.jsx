import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Button, ButtonGroup, Col, FormControl, FormGroup, Panel } from 'react-bootstrap'

class NewCharacter extends React.Component {
  render () {
    return (
      <Col xs={12} sm={6} md={4}>
        <Panel header='New Character' bsStyle='info'>
          <Accordion defaultActiveKey='1'>
            <Panel header='Description' eventKey='1'>
              <FormGroup controlId='formControlsTextarea'>
                <FormControl componentClass='textarea' style={{'resize': 'vertical'}} placeholder='Overall description of the character' />
              </FormGroup>
            </Panel>
            <Panel header='Motivation' eventKey='2'>
              <FormGroup controlId='formControlsTextarea'>
                <FormControl componentClass='textarea' style={{'resize': 'vertical'}} placeholder='The things that motivate the character to act' />
              </FormGroup>
            </Panel>
            <Panel header='Goal' eventKey='3'>
              <FormGroup controlId='formControlsTextarea'>
                <FormControl componentClass='textarea' style={{'resize': 'vertical'}} placeholder='The goals of the character' />
              </FormGroup>
            </Panel>
            <Panel header='Conflict' eventKey='4'>
              <FormGroup controlId='formControlsTextarea'>
                <FormControl componentClass='textarea' style={{'resize': 'vertical'}} placeholder='Conflicts that the character faces' />
              </FormGroup>
            </Panel>
            <Panel header='Epiphany' eventKey='5'>
              <FormGroup controlId='formControlsTextarea'>
                <FormControl componentClass='textarea' style={{'resize': 'vertical'}} placeholder='Epiphanies that the character reaches that lead to growth' />
              </FormGroup>
            </Panel>
            <Panel header='Relationships' eventKey='6'>
              <p>Need to let characters have these but needs new store schema</p>
            </Panel>
          </Accordion>
          <ButtonGroup style={{'float': 'right'}}>
            <Button bsStyle='info' bsSize='small' onClick={() => console.log('Do the save')}>Save</Button>
          </ButtonGroup>
        </Panel>
      </Col>
    )
  }
}

NewCharacter.propTypes = {
  save: PropTypes.func
}

export default NewCharacter
