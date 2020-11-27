import React from 'react'
import {Col, Container, Row, Table} from 'react-bootstrap'

function StudentTest(){

    return(
        <>
            <h1>Dashboard</h1>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Marks</th>
                                <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Mid Test</td>
                                <td>Physics</td>
                                <td>50</td>
                                <td>27-Nov-2020</td>
                                </tr>
                                <tr>
                                <td>Mid Test</td>
                                <td>Chemistry</td>
                                <td>65</td>
                                <td>26-Nov-2020</td>
                                </tr>
                                <tr>
                                <td>Mid Test</td>
                                <td>Math</td>
                                <td>90</td>
                                <td>24-Nov-2020</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default StudentTest