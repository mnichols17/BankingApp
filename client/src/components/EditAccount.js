import React from 'react';
import { connect } from 'react-redux';
import { editAccount } from '../actions/index'

class EditAccount extends React.Component {

    state = {
        firstName: '',
        lastName: '',
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        if(this.state.firstName === '' || this.state.lastName === ''){
            alert("Your account needs both a first and last name")
        } else {
            this.props.editAccount({id: this.props.account.id, firstName: this.state.firstName, lastName: this.state.lastName, balance: this.props.account.balance})
            this.props.edited()
        }
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default connect(null, {editAccount})(EditAccount);