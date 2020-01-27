import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Home.css'
import '../Assets/Header.css'
import '../Assets/nice-select.css'
import '../Assets/Popup.css'
import '../Assets/Default.css'
import '../Assets/Main.css'
import Product from './Product';
import Main from './Main';
import Nav from './Nav';

export default class Home extends Component {

    render() {
        return (
            
                <React.Fragment>
                    <Nav />
                    <Main />
                    
                </React.Fragment>
            
        );
    }
}
