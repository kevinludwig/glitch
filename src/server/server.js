const path = require('path'),
      express = require('express'),
      config = require('config'),
      staticGzip = require('express-static-gzip');

const app = express();

app.use(staticGzip('dist'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(config.port, () => {
    console.log(`listening on ${config.port}`);
});
