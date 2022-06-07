import React, { Component } from 'react';
//import PopupReact from 'react-popup/dist/Popup.react';
import './Person.css';
import Popup from 'reactjs-popup';
import './Popups.css';
import 'reactjs-popup/dist/index.css';

class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            phone: '',

            errors: {
                firstName: false,
                lastName: false,
            },

            open: true,

        }
    }
    
    handleOnChange = e => {
        const {target: {value, name}} = e;
        
        const val = value;

        this.setState({
            [name]: val
        })
        console.log(val);
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const {name, lastName, email, phone} = this.state;
        
        this.setState({
            errors:{
                firstName: name.trim() === '',
                lastName: lastName.trim() === ''
            }
        })

        if (name.trim() && lastName.trim())
        {

            this.setState({
                open: true
            })

            
        }
    }

    render() {
        const closeModal = () => this.setState({open: false});
        return (
            <div>
                        <Popup open={this.state.open} closeOnDocumentClick onClose={closeModal}>
                            
                            <div className="modal">
                            <div className = "header">Personal Information</div>
                                <div className="close" onClick={closeModal}>
                                    &times;
                                </div>
                                <div className="content">
                                    <p><strong>Name:</strong> {this.state.name} {this.state.lastName}</p>
                                    <p><strong>Email:</strong> {this.state.email}</p>
                                    {this.state.phone && <p><strong>Phone:</strong>{this.state.phone}</p>}
                                </div>
                                <button onClick={closeModal}>close</button>
                            </div>
                            
                        </Popup>
                <form onSubmit={this.handleOnSubmit}>
                Nombre :
                <div className = "nombre">
                <input
                    onChange={this.handleOnChange}
                    name = "name"
                    type = "text"
                    value = {this.state.name}
                    className ={
                        this.state.errors.firstName ? 'error' : ''
                    }
                />
                </div>
                {
                    this.state.errors.firstName 
                    &&
                    <div className = "errorMessage">Required</div> 
                }
                
                Apellido: 
                <div className = "apellido">
                    
                <input
                    onChange={this.handleOnChange}
                    name = "lastName"
                    type = "text"
                    value = {this.state.lastName}
                    className ={
                        this.state.errors.lastName ? 'error' : ''
                    }
                />
                </div>
                {
                    this.state.errors.lastName 
                    &&
                    <div className = "errorMessage">Required</div>
                }
                
                Email:
                <div className = "email">
                    
                <input
                    onChange={this.handleOnChange}
                    name = "email"
                    type = "email"
                    value = {this.state.email}
                />
                </div>
                
                Telefono:
                <div className = "phone">
                    
                <input
                    onChange={this.handleOnChange}
                    name = "phone"
                    type = "tel"
                    value = {this.state.phone}
                />
                </div>
                <button>
                    sublime
                </button>
                </form>
            </div>
        );
    }
}
export default Person;