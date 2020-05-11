import React from 'react';
import axios from 'axios';

class Register extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        balance: 0
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.firstName === '' || this.state.lastName === ''){
            alert("Please enter both a first and last name")
        } else {
            axios({
                method: "post",
                url: '/api/profiles',
                data: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    balance: this.state.balance
                }
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }
        this.props.history.push('/')
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input onChange={this.onChange} value={this.state.firstName} type="text" className="form-control" id="firstName" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input onChange={this.onChange} value={this.state.lastName} type="text" className="form-control" id="lastName" />
                </div>
                <div className="form-group">
                    <label htmlFor="balance">Balance</label>
                    <input onChange={this.onChange} value={this.state.balance} type="number" className="form-control" id="balance" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Register;