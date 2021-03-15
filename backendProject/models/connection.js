var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect('mongodb+srv://Remir95:moi@cluster0.pc5dr.mongodb.net/InsideGaming?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err)
    }
)

module.exports = mongoose