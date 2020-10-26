module.exports = {
    mongoURI: 'mongodb+srv://Estelle:Kc1yZ2S19jp24i1N@cluster0.f29ee.mongodb.net/MERNdb?retryWrites=true&w=majority',
    secretOrKey: "TrailsintheSkySecondChapter!"
}

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}



// Kc1yZ2S19jp24i1N

