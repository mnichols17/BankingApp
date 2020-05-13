import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAccounts } from '../actions/accountActions';

import "../styles/home.css";

class Home extends React.Component {

    componentDidMount = async() => {
        this.props.getAccounts();
    }

    render() {
        return (
            <div className="container" style={{background:"white"}}>
                <div className="container p-3">
                    <h1>Accounts</h1>
                    <ul id="accountsList" className="list-group list-group-flush">
                        {this.props.accounts.map(account => {
                            return(
                                <Link to={`/profile/${account.id}`} key={account.id} className="accountsList-item">
                                    <li className="list-group-item">{account.firstName} {account.lastName} - Balance: <span style={{color: "#F1948A"}}>${account.balance}</span></li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
    }
}

export default connect(mapStateToProps, {getAccounts})(Home);