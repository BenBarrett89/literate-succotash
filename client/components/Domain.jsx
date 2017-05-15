import React from 'react'
import { Button, Col, Grid, Panel, Row } from 'react-bootstrap'

import DomainConstants from '../constants/domain-constants'

// require('../sass/components/domain.scss')

export default React.createClass({
  propTypes: {
    domains: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        _id: React.PropTypes.string,
        count: React.PropTypes.number,
        time: React.PropTypes.string
      })
    ),
    value: React.PropTypes.number,
    decrement: React.PropTypes.func,
    increment: React.PropTypes.func,
    random: React.PropTypes.func,
    reset: React.PropTypes.func
  },
  componentWillUnmount: function () {
    this.props.reset()
  },
  render: function () {
    return (
      <Grid>
        <Row className='show-grid'>
          <h2>{DomainConstants.titleText}</h2>
          <Col xs={12} md={2} className='current-counter'>
            <Panel>
              <p>{DomainConstants.counterText}<span id={DomainConstants.valueSpanId}>{this.props.value}</span></p>
              <Button bsStyle='default' id={DomainConstants.incrementButtonId} onClick={() => this.props.increment()}>{DomainConstants.incrementButtonText}</Button>
              <Button bsStyle='default' id={DomainConstants.decrementButtonId} onClick={() => this.props.decrement()}>{DomainConstants.decrementButtonText}</Button>
              <Button bsStyle='warning' id={DomainConstants.resetButtonId} onClick={() => this.props.reset()}>{DomainConstants.resetButtonText}</Button>
              <Button bsStyle='info' id={DomainConstants.randomButtonId} onClick={() => this.props.random()}>{DomainConstants.randomButtonText}</Button>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
})
