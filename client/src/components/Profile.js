import React from 'react';
import { connect } from 'react-redux';
import { getAccounts, deleteAccount } from '../actions/accountActions';

import EditAccount from './EditAccount';
import Transaction from './Transaction';

class Profile extends React.Component {

    state = {
        edit: false,
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
        const account = this.props.accounts[accountID]
        return(
            accountID === -1 ? <h1>ACCOUNT NOT FOUND</h1> :
            <div>
                <div>
                    <h1>Name: {account.firstName} {account.lastName}</h1>
                    <h1>Balance: ${account.balance}</h1>
                    <Transaction balance= {account.balance} id={account.id}/>
                    <button onClick={() => this.setState({edit: true})}>Edit Account Information</button>
                    <button onClick={this.deleteAccount} id={account.id}>Delete Account</button>
                </div>
                <br />
                {!this.state.edit ? null : <EditAccount edited={() => this.setState({edit: false})} account={account} />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts
    }
}

export default connect(mapStateToProps, {getAccounts, deleteAccount})(Profile);