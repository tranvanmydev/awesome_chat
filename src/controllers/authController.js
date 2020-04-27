import { validationResult } from "express-validator/check";

let getLoginRegister = (req, res) => {
    return res.render("auth/master");
};

/**
 * Resgister account local
 * @param {*} req
 * @param {*} res
 */
let postRegister = (req, res) => {
    let errorsArray = [];
    console.log("postRegister -> postRegister");

    console.log(validationResult(req).mapped());
    console.log("--------");
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach(item => {
            errorsArray.push(item.msg);
        })

        return;
    }
    //do something
    console.log(req.body);


};

module.exports = {
    getLoginRegister: getLoginRegister,
    postRegister: postRegister
};