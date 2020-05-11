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
    const prevID = profiles[profiles.length - 1].id
    profiles.push({
        id: prevID + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        balance: req.body.balance
    })
    res.json(profiles)
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const profileID = profiles.findIndex(profile => parseInt(id) === profile.id)
    res.json(profileID !== -1 ? profiles[profileID] : {id: -1})
})

router.post('/:id', (req, res) => {
    const id = req.params.id;
    const profileID = profiles.findIndex(profile => parseInt(id) === profile.id)
    profiles[profileID] = req.body
    res.json(profiles)
})

module.exports = router;