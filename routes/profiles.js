const express = require('express');
const router = express.Router();

const profiles = [
    {id: 0, firstName: "Mike", lastName: "Nichols", balance: 100},
    {id: 1, firstName: "Test", lastName: "User", balance: 5000},
    {id: 2, firstName: "First", lastName: "Last", balance: 5},
]

router.get('/', (req, res) => {
    res.json(profiles);
})

router.post('/', (req, res) => {
    const prevID = profiles.length === 0 ? -1 : profiles[profiles.length - 1].id
    profiles.push({
        id: prevID + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        balance: req.body.balance
    })
    // POST to transactions to add initial deposit
    res.json(profiles)
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const profileIndex = profiles.findIndex(profile => parseInt(id) === profile.id)
    profiles[profileIndex] = req.body
    res.json(profiles)
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    const profileIndex = profiles.findIndex(profile => parseInt(id) === profile.id)
    profiles.splice(profileIndex, 1)
    // REMOVE all user transactions as well
    res.json(profiles)
})

module.exports = router;