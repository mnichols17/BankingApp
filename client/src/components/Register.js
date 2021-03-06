import React from 'react';
import { connect } from 'react-redux';
import { createAccount } from '../actions/accountActions';
import { createTransaction } from '../actions/transactionActions';

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

    onSubmit = e => {
        e.preventDefault();
        if(this.state.firstName === '' || this.state.lastName === ''){
            alert("Please enter both a first and last name")
        } else {
            this.props.createAccount(this.state.firstName, this.state.lastName, this.state.balance)
            this.props.history.push('/')
        }
    }

    render() {
        return(
            <div className="container p-3" style={{background: "white"}}>
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
                        <input onChange={this.onChange} value={this.state.balance} type="number" min="0" className="form-control" id="balance" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Account</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {createAccount, createTransaction})(Register);