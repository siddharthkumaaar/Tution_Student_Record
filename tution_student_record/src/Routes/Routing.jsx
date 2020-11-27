import React from 'react'
import {Route} from 'react-router-dom'
import Dashboard from '../componenet/Dashboard'
import StudentTest from '../componenet/StudentTest'

function Routing(){

    return(
        <>
         <Route exact path="/" component={Dashboard}/>
         <Route path="/studentdata" component={StudentTest}/>
        </>
    )
}
export default Routing