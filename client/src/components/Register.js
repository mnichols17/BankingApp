import React from 'react';

class Register extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        balance: 0
    }

    render() {
        return(
            <h1>Register Account</h1>
        )
    }
}

export default Register;