const jwt = require("jsonwebtoken");


const savingAccountCustomer = require("../database/Customer/SavingAccount");
const currentAccountCustomer = require("../database/Customer/CurrentAccount");

const customerauthenticate = async (req, res, next) => {
    try {

        const token = req.cookies.cookies1;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        

        const rootUser = await savingAccountCustomer.findOne({ _id: verifyToken._id, "tokens": token })
        const rootUser1 = await currentAccountCustomer.findOne({ _id: verifyToken._id, "tokens": token })



        

        if (rootUser) {
            req.token = token;
            req.rootUser = rootUser;
            req.id = rootUser._id;

        } else if (rootUser1) {
            req.token = token;
            req.rootUser = rootUser1;
            req.id = rootUser1._id;

        }
        
        else if (!rootUser && !rootUser1) {

            throw new Error("Customer Not Found During Authentication!")

        }




        next();

    } catch (err) {
        res.status(401).send("UnAuthorised Customer, No Token Found!")
        console.log(`UnAuthorised Customer - ${err}`);
    }
}
module.exports = customerauthenticate;
