import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../components/Button';
import './Navbar.css';

class Navbar extends Component{
    //Go over what state and props are
    //this state is used here to give the logic of whether 
    //the state of a variable/object has been clicked or not
    state = { clicked: false }

    // This is the function that is displayed within the menu-icon div 
    // tag that actually allows the x to come up on the screen when it detects
    // a click
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }


    render() {
        return(
            <nav className="Navbar-Items">
                {/* <i className="fab fa-react"></i> For when I decide to put an icon in the navbar  */}
                <h1 className="navbar-logo">HAYT.</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* logic that determines whether or not to change the hamburger lines
                    to an x if it has been clicked */}
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

                </div>
                {/* <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}></ul>; */}
                
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>;
                    {/* maps through the array MenuItems to which will display 
                    everything in the array onto the navbar  */}
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                <Button>Sign In</Button>
            </nav>

        )
    }
}


export default Navbar;