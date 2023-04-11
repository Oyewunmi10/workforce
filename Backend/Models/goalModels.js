const mongoose = require ('mongoose');
gaolSchema = mongoose.schema({
    text : { 
        type: String,
        required : [true, 'please add a text value']
    }
    },
    {   
        timestamps: true
    }
)

module.exports = mongoose.model('goal',gaolSchema);