import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Profile from './Profile'

const styles = {
  panel: {
    backgroundColor: '#242d3c',
    borderRadius: '2px',
    color: '#9096a2',
    marginBottom: '10px',
    marginTop: 10,
    padding: '40px'
  }
}

export default props => (
  <Row>
    <Col xs={12} style={styles.panel}>
      <Profile />
    </Col>
  </Row>
)
