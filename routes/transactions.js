const express = require('express');
const router = express.Router();

const transactions = [
    {number: 1, userId: 0, amount: 100, type: "Deposit"},
    {number: 2, userId: 1, amount: 5500, type: "Deposit"},
    {number: 3, userId: 1, amount: 500, type: "Withdraw"},
    {number: 4, userId: 2, amount: 5, type: "Deposit"},
]

router.get('/', (req, res) => {
    res.json(transactions);
})

router.post('/:id', (req, res) => {
    const newTransactionID = transactions.length - 1 + 1
    transactions[newTransactionID] = {number: newTransactionID+1, userId: parseInt(req.params.id), amount: parseFloat(req.body.amount), type: req.body.type}
    res.json(transactions[newTransactionID])
})

module.exports = router;