const checkMillionDollarIdea = (req, res, next) => {
	if (typeof req.body.numWeeks === 'undefined' || typeof req.body.weeklyRevenue === 'undefined') {
		res.status(400).send('Invalid Data');
	} else {
		const numWeeks = Number(req.body.numWeeks.toString().replace(/[^\d\.]/g, ''));
		const weeklyRevenue = Number(req.body.weeklyRevenue.toString().replace(/[^\d\.]/g, ''));
	
		if(Number.isNaN(numWeeks) || Number.isNaN(weeklyRevenue)) {
			res.status(400).send('Invalid Data');
		} else if (numWeeks * weeklyRevenue < 1000000) {
			res.status(400).send('Not A Million Dollar Idea');
		} else { 
			next();
		}
	}
	
}

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
