import React, {Component} from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 10,
            name: 'Pyy',
        }
    }
    
    increaseNumber = () => {
        this.setState({
            number: this.state.number + 1,
        })
    }

    decreaseNumber = () => {
        this.setState({
            number: this.state.number - 1,
        })
    }

    render() {
        console.log(Math.random());
        return(
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/news" className="nav-link">News</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        )
    } 
}

export default Header;