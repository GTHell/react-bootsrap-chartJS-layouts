import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {
  TechnicalChart,
  LanguageChart,
  HobbyChart
} from '../Visualization/index'

const styles = {
  panel: {
    backgroundColor: '#242d3c',
    borderRadius: '2px',
    color: '#9096a2',
    marginBottom: '10px',
    paddingBottom: '15px'
  }
}

export default props => (
  <Row>
    <Col xs={12} md={6} style={styles.panel}>
      <h2>Technical Skills</h2>
      <TechnicalChart />
    </Col>
    <Col xs={12} md={6} style={styles.panel}>
      <h2>Languages</h2>
      <LanguageChart />
    </Col>
    <Col xs={12} style={styles.panel}>
      <h2>Hobbies</h2>
      <HobbyChart />
    </Col>
  </Row>
)
