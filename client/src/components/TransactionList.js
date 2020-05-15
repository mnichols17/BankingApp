import React from 'react';
import { connect } from 'react-redux';
import { getAccounts } from '../actions/accountActions';
import { getTransactions } from '../actions/transactionActions';

class TransactionList extends React.Component {

    componentDidMount = () => {
        this.props.getAccounts();
        this.props.getTransactions();
    }

    render() {
        const accounts = this.props.accounts;
        return (
            <div>
                <div className="container p-3" style={{background:"white"}}>
                    <ul className="list-group">
                        {this.props.transactions.map(transaction => {
                            const filterId = typeof(this.props.profileId) === "number" ? this.props.profileId : transaction.userId
                            const transactionUser = accounts.findIndex(account => transaction.userId === account.id)
                            return(
                                transaction.userId === filterId ? <li className={(transaction.type === "Deposit") ? "list-group-item list-group-item-success" : "list-group-item list-group-item-danger"} key={transaction.number}>{accounts[transactionUser].firstName} {accounts[transactionUser].lastName}, {transaction.type}: ${transaction.amount}</li> : null
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    getTransactions();
    return {
        accounts: state.accounts.accounts,
        transactions: state.transactions.transactions
    }
}

export default connect(mapStateToProps, {getAccounts, getTransactions})(TransactionList);