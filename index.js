const app = require('./config/server.js');
const Loaders = require('./config/Loaders.js')

/* parametrizar a porta de escuta */
app.listen(3000, () => {
	console.log('-- Server ON --');
})

Loaders.start();
  