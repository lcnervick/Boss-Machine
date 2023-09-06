const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase } = require('./db');

const formatType = type => type.slice(0, -1).replace(/^./, c => c.toUpperCase());

const getAll = (res) => {
	const { type } = res.element;
	console.log(`Getting all ${type}...`);
	const data = getAllFromDatabase(type);
	if (data) {
		res.status(200).json(data);
	} else {
		res.status(400).send('Invalid Request');
	}
};

const getOne = (res) => {
	const { type, name, id } = res.element;
	console.log(`Getting ${name} ${id}...`);
	const data = getFromDatabaseById(type, id);
	if (data) {
		res.status(200).json(data);
	} else {
		res.status(404).send(`${name} ${id} Not Found`);
	}
};

const create = (res, data) => {
	const { name, type } = res.element;
	console.log(`Creating New ${name}...`);
	try {
		const newEntity = addToDatabase(type, data);
		res.status(201).json(newEntity);
	} catch(err) {
		res.status(400).send(err);
	}
};

const update = (res, data) => {
	const { name, type, id } = res.element;
	console.log(`Updating ${name} ${id}...`);
	try {
		const updatedEntity = updateInstanceInDatabase(type, data);
		if (!updatedEntity) {
			throw new Error('Invalid Data');
		} else {
			res.status(200).json(updatedEntity);
		}
	} catch(err) {
		res.status(400).send(err);
	}
}

const deleteOne = (res) => {
	const { name, type, id } = res.element;
	console.log(`Deleting ${name} ${id}...`);
	const success = deleteFromDatabasebyId(type, id);
	if (success) {
		res.status(204).send();
	} else {
		res.status(404).send(`${res.reqType} ${id} Not Found`);
	}
}

const deleteAll = (res) => {
	const { type } = res.element;
	if (type !== 'meetings') res.status(400).send('Invalid Request');
	const result = deleteAllFromDatabase(type);
	if (result.length === 0) {
		res.status(204).send();
	} else {
		res.status(404).send('No Meetings Found');
	}
};

module.exports = {
	getAll,
	getOne,
	create,
	update,
	deleteOne,
	deleteAll,
	formatType
}