import React from 'react';
import { connect } from 'react-redux';
import { getAccounts, deleteAccount } from '../actions/accountActions';
import { getTransactions } from '../actions/transactionActions';

import "../styles/profile.css";
import EditAccount from './EditAccount';
import Transaction from './Transaction';
import TransactionList from './TransactionList';

class Profile extends React.Component {

    state = {
        edit: false,
    }
    
    componentDidMount = () => {
        this.props.getAccounts();
        this.props.getTransactions();
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
            accountID === -1 ? <div className="container" style={{background:"white"}}><h1>ACCOUNT NOT FOUND</h1></div> :
            <div className="container" style={{background:"white"}}>
                <div id="profile">
                    <div className="profile-content p-2">
                        <h4>ID: {account.id}</h4>
                        <h4>First name: {account.firstName}</h4>
                        <h4>Last name: {account.lastName}</h4>
                        <div className="btn-group p-3" role="group">
                            <button className="btn btn-info" onClick={() => this.setState({edit: true})}>Edit Information</button>
                            <button className="btn btn-danger" onClick={this.deleteAccount} id={account.id}>Delete Account</button>
                        </div>
                    </div>
                    <div className="profile-content p-2">
                        <Transaction balance= {account.balance} id={account.id}/>
                    </div>
                </div>
                {!this.state.edit ? null : <EditAccount edited={() => this.setState({edit: false})} account={account} />}
                <div>
                    <h3 className="mt-2">Transactions for {account.firstName} {account.lastName}</h3>
                    <TransactionList profileId={account.id} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
        transactions: state.transactions.transactions
    }
}

export default connect(mapStateToProps, {getAccounts, deleteAccount, getTransactions})(Profile);