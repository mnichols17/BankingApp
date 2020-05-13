import React from 'react';
import { connect } from 'react-redux';
import { editBalance } from '../actions/accountActions';
import { createTransaction } from '../actions/transactionActions';

class Transaction extends React.Component {

    state = {
        amount: 0
    }
    
    onChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    handleTransaction = e => {
        e.preventDefault();
        if(this.state.amount < 0){
            alert("Please enter a positive number")
        }
        else if(e.target.id === "withdraw" && this.props.balance < this.state.amount){
            alert("You don't have enough in your current balance to withdraw that amount!")
        } else {
            this.props.editBalance(this.props.id, this.state.amount, e.target.id);
            this.props.createTransaction(this.props.id, this.state.amount, e.target.id);
        }
        this.setState({
            amount: 0
        })
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <label htmlFor="amount">Amount $</label>
                <input onChange={this.onChange} value={this.state.amount} min="0" type="number" id="amount" />
                <button onClick={this.handleTransaction} id="deposit">Deposit</button>
                <button onClick={this.handleTransaction} id="withdraw">Withdraw</button>
            </form>
        )
    }
}

export default connect(null, {createTransaction, editBalance})(Transaction);