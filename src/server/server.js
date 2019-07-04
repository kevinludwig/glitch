const express = require('express'),
      config = require('config'),
      staticGzip = require('express-static-gzip');

const app = express();

app.use(staticGzip('dist'));

app.listen(config.port, () => {
    console.log(`listening on ${config.port}`);
});
