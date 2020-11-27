import React from 'react'
import {Col, Container, Row, Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Dashboard(){

    return(
        <>
            <h1>Dashboard</h1>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Image</th>
                                <th>Full Name</th>
                                <th>Grade</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Total Test Taken</th>
                                <th>Show Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td><Link to="/studentdata">Detail</Link></td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td><Link to="/studentdata">Detail</Link></td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td><Link to="/studentdata">Detail</Link></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard