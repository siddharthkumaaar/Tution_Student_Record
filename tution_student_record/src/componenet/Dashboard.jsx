import React from 'react'
import { Component } from 'react'
import {Col, Container, Row, Table, Pagination, Form} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Axios from 'axios'

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            next:"",
            prev:"",
            page:""
        }
    }

    componentDidMount(){
        Axios({
            method:'get',
            url:'http://localhost:5000/students?page=1&limit=5'
        })
        .then((res)=>{
            // console.log(res.data)
            this.setState({
                data:res.data.current,
                next:res.data.next,
                prev:res.data.prev,
                page:1,
                age:"",
                gender:"",
                grade:""
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    handleClick = (pageData) =>{
        console.log(pageData)
        Axios({
            method:'get',
            url:'http://localhost:5000/students',
            params:{
                page:pageData.page,
                limit:pageData.limit
            }
        })
        .then((res)=>{
            // console.log(res.data)
            this.setState({
                data:res.data.current,
                next:res.data.next,
                prev:res.data.prev,
                page:pageData.page
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    handleSort = (value) => {
        console.log(value)
    }

    render(){
        const {data,next,prev,page} = this.state
        
        return(
            <>
                <h1>Dashboard</h1>
                <Container>
                    <Row lg={1}>
                        <Col>
                            <Row lg={6}>
                                <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Sort By Grade</Form.Label>
                                    <Form.Control as="select" onChange={(e)=>this.setState({grade:e.target.value})}>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Sort By Gender</Form.Label>
                                    <Form.Control as="select" onChange={(e)=>this.setState({gender:e.target.value})}>
                                    <option value="M">M</option>
                                    <option value="F">F</option>
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Sort By Age</Form.Label>
                                    <Form.Control as="select" onChange={(e)=>this.setState({age:e.target.value})}>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Image</th>
                                    <th>Full Name</th>
                                    <th>Grade</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    {/* <th>Total Test Taken</th>
                                    <th>Show Detail</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.map((item)=>(
                                    <tr>
                                    <td><img src={item.img} alt={item.full_name}/></td>
                                    <td>{item.full_name}</td>
                                    <td>{item.grade}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.age}</td>
                                    {/* <td>{item.}</td>
                                    <td><Link to="/studentdata">Detail</Link></td> */}
                                    </tr>
                                 ))}
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                        <Pagination>
                            {prev?<Pagination.Prev onClick={()=>this.handleClick(prev)}/>:<Pagination.Prev disabled/>}
                            <Pagination.Item>{page}</Pagination.Item>
                            {next?<Pagination.Next onClick={()=>this.handleClick(next)}/>:<Pagination.Next disabled/>}
                            
                        </Pagination>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Dashboard