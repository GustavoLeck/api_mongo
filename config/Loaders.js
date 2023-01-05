const startDB = require('./dbConnection')

class Loaders {
    start(){
        startDB();
    }
}


module.exports = new Loaders();