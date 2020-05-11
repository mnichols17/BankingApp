import React from 'react';
import axios from 'axios';

const userExists = (fullName, balance, editAccount) => {
    return (
        <div>
            <h1>Name: {fullName}</h1>
            <h1>Balance: ${balance}</h1>
            {/* Add Form for deposit / withdraw */}
            <button onClick={editAccount} value="edit">Edit Account Information</button>
            <button onClick={editAccount} value="delete">Delete Account</button>
        </div>
    )
}

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

    editAccount = (e) => {
        e.preventDefault();
        if(e.target.value === "edit"){
            console.log("EDIT")
        } else {
            console.log("DELETE")
        }
    }

    render() {

        let view = this.state.id !== -1 ? userExists(this.state.fullName, this.state.balance, this.editAccount) : <h1>USER DOES NOT EXIST!</h1>

        return(
            <div>
                {view}
            </div>
        )
    }
}

export default Profile;