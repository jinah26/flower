const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = mongoose.Schema({
    user: {
        type: Array,
        default: []
    },
    data: {
    type: Array,
    default: []
    },
    prdouct: {
        type: Array,
        default: []
    }
   
}, {timestamps: true})
    
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment }