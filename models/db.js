const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://admin:admin1234@cluster0-tuc2s.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');