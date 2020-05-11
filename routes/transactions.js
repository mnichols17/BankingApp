const express = require('express');
const router = express.Router();

const transactions = [
    {number: 1, userId: 0, amount: 100, type: "Deposit"},
    {number: 2, userId: 2, amount: 5, type: "Deposit"},
    {number: 3, userId: 1, amount: 5500, type: "Deposit"},
    {number: 4, userId: 1, amount: 500, type: "Withdraw"},
]

router.get('/', (req, res) => {
    res.json(transactions);
})

router.post('/:id', (req, res) => {
    res.json(transactions[transactions.length - 1])
})

module.exports = router;