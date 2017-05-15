import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Grid, Panel, Row, Table } from 'react-bootstrap'

import DomainConstants from '../constants/domain-constants'

class Domain extends React.Component {
  componentWillUnmount () {
    this.props.reset()
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>{DomainConstants.titleText}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={2}>
            <Panel header='Count'>
              <p>{DomainConstants.counterText}<span id={DomainConstants.valueSpanId}>{this.props.value}</span>
              </p>
              <Button bsStyle='default' id={DomainConstants.incrementButtonId} onClick={() => this.props.increment()}>{DomainConstants.incrementButtonText}</Button>
              <Button bsStyle='default' id={DomainConstants.decrementButtonId} onClick={() => this.props.decrement()}>{DomainConstants.decrementButtonText}</Button>
              <Button bsStyle='warning' id={DomainConstants.resetButtonId} onClick={() => this.props.reset()}>{DomainConstants.resetButtonText}</Button>
              <Button bsStyle='info' id={DomainConstants.randomButtonId} onClick={() => this.props.random()}>{DomainConstants.randomButtonText}</Button>
            </Panel>
          </Col>
          <Col xs={12} md={2}>
            <Panel header='Results'>
              <Table />
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

Domain.propTypes = {
  domains: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      count: PropTypes.number,
      time: PropTypes.string
    })
  ),
  value: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  random: PropTypes.func,
  reset: PropTypes.func
}

export default Domain
