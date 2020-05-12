import React from 'react';
import { connect } from 'react-redux';
import { getAccounts, deleteAccount } from '../actions/index'

import EditAccount from './EditAccount';

const accountExists = ({id, firstName, lastName, balance}, editAccount, deleteAccount) => {
    return (
        <div>
            <h1>Name: {firstName} {lastName}</h1>
            <h1>Balance: ${balance}</h1>
            {/* Add Form for deposit / withdraw */}
            <button onClick={editAccount} id={id}>Edit Account Information</button>
            <button onClick={deleteAccount} id={id}>Delete Account</button>
        </div>
    )
}

class Profile extends React.Component {

    state = {
        edit: false
    }
    
    componentDidMount = () => {
        this.props.getAccounts();
    }

    deleteAccount = e => {
        e.preventDefault();
        this.props.deleteAccount(e.target.id);
        this.props.history.push("/");
    }

    render() {
        const accountID = this.props.accounts.findIndex(account => parseInt(this.props.match.params.id) === account.id);

        return(
            <div>
                {accountID === -1 ? <h1>ACCOUNT NOT FOUND</h1> : accountExists(this.props.accounts[accountID], () => {this.setState({edit: true})}, this.deleteAccount)}
                <br />
                {!this.state.edit ? null : <EditAccount edited={() => this.setState({edit: false})} account={this.props.accounts[accountID]} />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {getAccounts, deleteAccount})(Profile);