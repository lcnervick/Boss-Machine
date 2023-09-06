const express = require('express');

// /api
const apiRouter = express.Router();
const minionsRouter = require('./minions');
const ideasRouter = require('./ideas');
const meetingsRouter = require('./meetings');

// /api/minions
apiRouter.use('/minions', minionsRouter);

// /api/ideas
apiRouter.use('/ideas', ideasRouter);

// /api/meetings
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
