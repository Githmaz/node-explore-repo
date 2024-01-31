const studentAuthService = require('../services/studentAuthService')
const { studentResponse } = require('../utils/studentResponseUtil')



//------------------- Get all students with Auth-------------------//

const getAllStudents =async (req, res)=>{
    try {
        studentResponse.sendAllStudents(res,await studentAuthService.getAllStudents())
    } catch (error) {
        studentResponse.sendServerError(res);
    }
}



module.exports = {getAllStudents}