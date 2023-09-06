const express = require('express');
const { formatType } = require('./helperFuncs');

// /api
const apiRouter = express.Router();

// create element object with type, name and id properties
apiRouter.all('/:elementType/:elementId?', (req, res, next) => {
	res.element = {
		id: req.params.elementId || null,
		type: req.params.elementType,
		name: formatType(req.params.elementType)
	};
	console.log("Request Element Params", res.element);
	next();
});

// /api/minions
const minionsRouter = require('./minions');
apiRouter.use('/minions', minionsRouter);

// /api/ideas
const ideasRouter = require('./ideas');
apiRouter.use('/ideas', ideasRouter);

// /api/meetings
const meetingsRouter = require('./meetings');
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
