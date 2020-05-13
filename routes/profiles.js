const express = require('express');
const router = express.Router();

const profiles = [
    {id: 0, firstName: "Mike", lastName: "Nichols", balance: 100},
    {id: 1, firstName: "Test", lastName: "User", balance: 5000},
    {id: 2, firstName: "First", lastName: "Last", balance: 5},
]

// Gets all profiles
router.get('/', (req, res) => {
    res.json(profiles);
})

// Creates a profile
router.post('/', (req, res) => {
    const prevID = profiles.length === 0 ? -1 : profiles[profiles.length - 1].id
    const newAccount = {
        id: prevID + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        balance: parseInt(req.body.balance)
    }
    profiles.push(newAccount)
    res.json(newAccount)
})

// Edits balance
router.put('/balance', (req, res) => {
    const profileIndex = profiles.findIndex(profile => parseInt(req.body.id) === profile.id)
    const currBalance = profiles[profileIndex].balance
    console.log(currBalance + parseFloat(req.body.amount))
    profiles[profileIndex].balance = req.body.type === "Deposit" ? currBalance + parseFloat(req.body.amount) : currBalance - parseFloat(req.body.amount)
    res.json(profiles)
})

// Edits information of a profile
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const profileIndex = profiles.findIndex(profile => parseInt(id) === profile.id)
    profiles[profileIndex] = req.body
    res.json(profiles)
})

// Deletes a profile
router.delete('/:id', (req, res) => {
    const id = req.params.id
    const profileIndex = profiles.findIndex(profile => parseInt(id) === profile.id)
    profiles.splice(profileIndex, 1)
    // REMOVE all user transactions as well
    res.json(profiles)
})

module.exports = router;