import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import './result.css'

class Result extends Component {
  render() {
    return(
          <div className='div'>
          <div className='text-right'>
            <Button className='btn' variant="outline-success" href="/" >Back to search</Button>
          </div><br />
          {this.props.response.map((value, index)=>(
          <div>
            <Card>
              <Card.Header>{value.title}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {''}
                      {value.body}.{' '}
                    </p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title">{value.author}</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
            </Card><br />
          </div>
          ))}
          </div>
        );
      }
    }

export default Result;
