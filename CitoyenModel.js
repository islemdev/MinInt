// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var citoyenSchema = mongoose.Schema({
    cin: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    genre: String,
    infos: [
        {
            recherche: String,
            ajust: Boolean,
            cause: String,
            date: Date
        }
    ],
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var CitoyenModel = module.exports = mongoose.model('CitoyenModel', citoyenSchema);
module.exports.get = function (callback, limit) {
    CitoyenModel.find(callback).limit(limit);
}