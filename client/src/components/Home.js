import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    state = {
        accounts: []
    }

    componentDidMount = () => {
        axios.get('/api/profiles')
        .then(res => this.setState({
            accounts: res.data
        }))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.accounts.map(account => {
                        return(
                            <li key={account.id}><Link to={`/profile/${account.id}`}>{account.id} - {account.firstName} {account.lastName} - ${account.balance}</Link></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Home;