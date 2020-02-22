import React, {Component} from  'react'
import Photowall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'
import Single from './Single'

class Main extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">PhotoWall</Link>
                </h1>
                <Route exact path ="/" render={() => (
                    <div>
                        <Photowall {...this.props}/>
                    </div>
                )}/>
           
                <Route path="/addPhoto" render = {(params) => (
                <AddPhoto {...this.props} onHistory={params.history}/>
                )}/>

                <Route path="/single/:id" render = {(params) => (
                    <Single {...this.props} {...params}/>
                )}/>
            </div>
    )}
} 


export default Main