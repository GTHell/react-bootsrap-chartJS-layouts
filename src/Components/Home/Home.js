import React from 'react'
import { Jumbotron, SkillPanel } from './index'
import { Grid, Row, Col } from 'react-bootstrap'

export default props => (
  <div>
    <Grid style={{ backgrounColor: '' }}>
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <Jumbotron />
        </Col>
      </Row>

      <Row className="show-grid">
        <Col xs={12} md={12}>
          <SkillPanel />
        </Col>
      </Row>
    </Grid>
  </div>
)
