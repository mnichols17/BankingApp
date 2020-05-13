const express = require('express');
const router = express.Router();

let transactions = [
    {number: 1, userId: 0, amount: 100, type: "Deposit"},
    {number: 2, userId: 1, amount: 5500, type: "Deposit"},
    {number: 3, userId: 1, amount: 500, type: "Withdraw"},
    {number: 4, userId: 2, amount: 5, type: "Deposit"},
]

// Gets all transactions
router.get('/', (req, res) => {
    res.json(transactions);
})

// Creates a transaction for a user
router.post('/:id', (req, res) => {
    const newTransactionID = transactions.length - 1 + 1
    transactions[newTransactionID] = {number: newTransactionID+1, userId: parseInt(req.params.id), amount: parseFloat(req.body.amount), type: req.body.type}
    res.json(transactions[newTransactionID])
})

// When an account is deleted, all their transactions are deleted as well
router.delete('/:id', (req, res) => {
    transactions = transactions.filter(({userId}) => parseInt(req.params.id) !== userId)
    res.json(transactions)
})

module.exports = router;