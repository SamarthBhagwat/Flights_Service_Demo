const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common_utils');

/*
*   POST: /airplanes
    req-body : {modelNumber: 'airbus320', capacity: 200}
*/
async function createAirplane(req, res) {
    try {
        const responseData = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity 
        });
        SuccessResponse.data = responseData;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirplanes(req, res){
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);    
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(err.statusCode).json(ErrorResponse);
    }
}

async function getAirplane(req, res){
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data  = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);    
    } catch (error) {
        ErrorResponse.error = error;
        res.status(error.statusCode).json(ErrorResponse);
    }
}

async function destoryAirplane(req, res){
    try {
        const response = await AirplaneService.destoryAirplane(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);    
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
    

}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destoryAirplane
};