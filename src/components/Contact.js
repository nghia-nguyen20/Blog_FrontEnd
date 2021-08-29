import React, {Component} from "react";

class Contact extends Component {
    render() {
        return(
            <div className="contact">
                contact page
                <p>so dien thoai: {this.props.phone}</p>
                <p>name: {this.props.name}</p>
                <p>add: {this.props.address}</p>
            </div>
        )
    } 
}

export default Contact;