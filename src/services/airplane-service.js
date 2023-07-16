const { StatusCodes } = require('http-status-codes');
const { ValidationError } = require('sequelize');
const {AirplaneRepository} = require('../repositories');
const {AppError} = require('../utils/errors/app_error')

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        if(error instanceof ValidationError){
            let explanation = [];
            error.errors.forEach((err) =>{
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Failed to create airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane
}