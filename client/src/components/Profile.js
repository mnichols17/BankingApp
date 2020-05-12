import React from 'react';
import { connect } from 'react-redux';
import { getAccounts, deleteAccount } from '../actions/index'

const userExists = ({id, firstName, lastName, balance}, editAccount) => {
    return (
        <div>
            <h1>Name: {firstName} {lastName}</h1>
            <h1>Balance: ${balance}</h1>
            {/* Add Form for deposit / withdraw */}
            <button onClick={editAccount} id={id} value="edit">Edit Account Information</button>
            <button onClick={editAccount} id={id} value="delete">Delete Account</button>
        </div>
    )
}

class Profile extends React.Component {
    
    componentDidMount = () => {
        this.props.getAccounts();
    }

    editAccount = e => {
        e.preventDefault();
        if(e.target.value === "edit"){
            console.log("EDIT")
            console.log(e.target.id)
        } else {
            this.props.deleteAccount(e.target.id);
            this.props.history.push("/");
        }
    }

    render() {
        const accountID = this.props.accounts.findIndex(account => parseInt(this.props.match.params.id) === account.id);

        return(
            <div>
                {accountID === -1 ? <h1>ACCOUNT NOT FOUND</h1> : userExists(this.props.accounts[accountID], this.editAccount)}
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