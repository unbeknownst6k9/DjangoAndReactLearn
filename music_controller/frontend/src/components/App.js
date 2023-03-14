import React, {Component} from 'react';
import {render} from 'react-dom';
import {HomePage, RoomJoinPage, CreateRoomPage} from './index';

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <HomePage/>
            <RoomJoinPage/>
            <CreateRoomPage/>
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);