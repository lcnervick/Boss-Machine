const express = require('express');
const { formatType } = require('./helperFuncs');

// /api
const apiRouter = express.Router();

// create element object with type, name and id properties
apiRouter.all('/:elementType/:elementId?', (req, res, next) => {
	if (typeof req.params.elementId !== 'undefined') {
		const id = Number(req.params.elementId);
		if (Number.isNaN(id)) {
			res.status(404).send('Invalid Id');
		}
		req.params.elementId = id.toString();
	}
	res.element = {
		id: req.params.elementId || null,
		type: req.params.elementType,
		name: formatType(req.params.elementType)
	};
	// console.log("Request Element Params", req.method, res.element);
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
