import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';

import api from './api/v1';

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
	"origin": config.origin,
  "methods": config.methods,
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// Setup router and routes
app.use("/api", api);
app.use("/api/v1", api);

app.use( (req, res, next) => {
  res.status(404);
  res.json({
    "error": "Error. Route not found"
  });
});

app.use( (err, req, res, next) => {
  res.status(500);
  res.json({
    "error": `${err}`
  });
});

export default app;