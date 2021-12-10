import React, { Component } from 'react';
import './header.css';


export default class Header extends Component {
    render() {
        return(
            <div>
                <header className="header-gria">
                    <h1 className="logo-gria">GRIA</h1>
                    <ul>
                        <div>
                            <a
                                href="./Gria.js"
                                target="_self"
                                rel="noopener noreferrer"
                            >
                                <li>Oportunidades</li>
                            </a>
                        </div>
                        <div>    
                            <li>
                                <button className="dropdown-toggle">LOGIN</button>
                            </li>
                        </div>    
                    </ul>
                </header>
            </div>
        )      
    }
}
