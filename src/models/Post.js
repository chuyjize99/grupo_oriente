const { Schema, model } = require ("mongoose");

const postSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        requiere: true,
        trim: true 
    },
    image: {
        url: String,
        public_id: String 
    }
});

module.exports = model ('Post', Schema);

