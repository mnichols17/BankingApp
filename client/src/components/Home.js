import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAccounts } from '../actions/accountActions'

class Home extends React.Component {

    state = {
        accounts: [],
        transactions: []
    }

    componentDidMount = async() => {
        this.props.getAccounts();
        axios.get('/api/transactions')
        .then(res => this.setState({
            transactions: res.data
        }))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>ACCOUNTS</h1>
                <ul>
                    {this.props.accounts.map(account => {
                        return(
                            <li key={account.id}><Link to={`/profile/${account.id}`}>{account.id} - {account.firstName} {account.lastName} - ${account.balance}</Link></li>
                        )
                    })}
                </ul>
                <br />
                <h1>TRANSACTIONS</h1>
                <ul>
                    {this.state.transactions.map(transaction => {
                        return(
                            <li key={transaction.number}>User {transaction.userId}, {transaction.type}: ${transaction.amount}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts
    }
}

export default connect(mapStateToProps, {getAccounts})(Home);