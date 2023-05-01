const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

        name: {
            type: String, 
            required: true
        },
        userType: {
            type: String, 
            required: true
        },
        password: {
            type: String, 
            required: true
        },
        balance: {
            type: Number,
            required: true
        },
        transactions: [
            {
                type: {
                    type: String,
                    enum: ['credit', 'debit'],
                    required: true
                },
                amount: {
                    type: Number,
                    required: true
                },
                date: {
                    type: Date,
                    required: true,
                    default: Date.now
                }
            }
        ]
});

const user = mongoose.model('user', userSchema);
module.exports = user;