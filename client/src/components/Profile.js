import React from 'react';
import axios from 'axios';

class Profile extends React.Component {

    state = {
        id: "",
        fullName: "",
        balance: "N/A"
    }

    componentDidMount = () => {
        axios.get(`/api/profiles/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                id: res.data.id,
                fullName: `${res.data.firstName} ${res.data.lastName}`,
                balance: res.data.balance
            })
        })
        .catch(err => console.log(err))
    }

    render() {

        let view = this.state.id !== -1 ? <div><h1>Name: {this.state.fullName}</h1>
        <h1>Balance: ${this.state.balance}</h1></div> : <h1>USER DOES NOT EXIST!</h1>

        return(
            <div>
                {view}
            </div>
        )
    }
}

export default Profile;