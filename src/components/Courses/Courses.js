import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Courses.css';
const Courses = (props) => {
    console.log(props);
    const { description, price, title, img } = props.coursers;
    return (
        <div className="courseStyle">
            <Row>
                <Col md-4>
                <Card style={{ width: '20rem' }}>
                    <Card.Img className="imgstyle" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <h4>Course Price: {price}</h4> <br/>
                        <Button
                            className="enrollbtn btn btn-outline-success" variant="light"
                            onClick={() => props.handleAddCourse(props.coursers)}>
                            <FontAwesomeIcon icon={faPlusCircle} />
                            Enroll now
                        </Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>


        </div>
    );
};

export default Courses;