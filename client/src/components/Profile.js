import React from 'react';

class Profile extends React.Component {

    state = {
        id: -1,
        fullName: "",
        balance: "N/A"
    }

    componentDidMount = () => {
        // Get account info from DB
        this.setState({
            id: this.props.match.params.id
        })
    }

    render() {
        return(
            <h1>Profile</h1>
        )
    }
}

export default Profile;