const jwt = require("jsonwebtoken");

const scale1employeedb = require("../database/EmployeesRegistration/Scale1Employees");
const scale2employeedb = require("../database/EmployeesRegistration/Scale2Employees");
const scale3employeedb = require("../database/EmployeesRegistration/Scale3Employees");
const scale4employeedb = require("../database/EmployeesRegistration/Scale4Employees");
const scale5employeedb = require("../database/EmployeesRegistration/Scale5Employees");
const technicalStaff = require("../database/EmployeesRegistration/technicalStaff");

const savingAccountCustomer = require("../database/Customer/SavingAccount");
const currentAccountCustomer = require("../database/Customer/CurrentAccount");

const authenticate = async (req, res, next) => {
    try {

        const token = req.cookies.cookies1;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser1 = await scale1employeedb.findOne({ _id: verifyToken._id, "tokens": token })
        const rootUser2 = await scale2employeedb.findOne({ _id: verifyToken._id, "tokens": token })
        const rootUser3 = await scale3employeedb.findOne({ _id: verifyToken._id, "tokens": token })
        const rootUser4 = await scale4employeedb.findOne({ _id: verifyToken._id, "tokens": token })
        const rootUser5 = await scale5employeedb.findOne({ _id: verifyToken._id, "tokens": token })
        const rootUser6 = await technicalStaff.findOne({ _id: verifyToken._id, "tokens": token })

        const rootUser7 = await savingAccountCustomer.findOne({ _id: verifyToken._id, "tokens": token })
        const rootUser8 = await currentAccountCustomer.findOne({ _id: verifyToken._id, "tokens": token })



        if (rootUser1) {
            
            req.token = token;
            req.rootUser = rootUser1;
            req.id = rootUser1._id;

        } else if (rootUser2) {
            req.token = token;
            req.rootUser = rootUser2;
            req.id = rootUser2._id;

        } else if (rootUser3) {
            req.token = token;
            req.rootUser = rootUser3;
            req.id = rootUser3._id;


        } else if (rootUser4) {
            req.token = token;
            req.rootUser = rootUser4;
            req.id = rootUser4._id;

        } else if (rootUser5) {
            req.token = token;
            req.rootUser = rootUser5;
            req.id = rootUser5._id;

        } else if (rootUser6) {
            req.token = token;
            req.rootUser = rootUser6;
            req.id = rootUser6._id;

        }  else if (rootUser7) {
            req.token = token;
            req.rootUser = rootUser7;
            req.id = rootUser7._id;

        } else if (rootUser8) {
            req.token = token;
            req.rootUser = rootUser8;
            req.id = rootUser8._id;

        }
        
        else if (!rootUser1 && !rootUser2 && !rootUser3 && !rootUser4 && !rootUser5 && !rootUser6 && !rootUser7 && !rootUser8) {

            throw new Error("User Not Found During Authentication!")

        }




        next();

    } catch (err) {
        res.status(401).send("UnAuthorised User, No Token Found!")
        console.log(`UnAuthorised User - ${err}`);
    }
}
module.exports = authenticate;
