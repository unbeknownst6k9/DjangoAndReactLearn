import React, {Component, ReactDOM} from 'react';
import {RoomJoinPage, CreateRoomPage} from './index'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (<Router>
            <Routes>
                <Route path='/'></Route>
                <Route path='join' element={RoomJoinPage}/>
                <Route path='create_room' element={CreateRoomPage}/>
            </Routes>
        </Router>);
    }
}