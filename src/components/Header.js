import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

export default function Header() {
  return (
    <div className='text-center align-item-center justify-content-center'>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">GitHub Users</h1>
          <p className="lead">Fetching data from an API.</p>
        </Container>
      </Jumbotron>
    </div>
  )
}
