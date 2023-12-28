const Info = require('../models/entryModels')

const collectionData = await Info.find({})
const { bloodPressure, bloodSugar } = collectionData;


