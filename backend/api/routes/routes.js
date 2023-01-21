// const { db } = require('./models/sample');
var credentialData = require('./models/sample');

module.exports = function (app) {
    app.post('/user/create', async function (req, res) {
        //console.log("inside api create");
        const requestBody = req.body;
        console.log("routesjs requestbody",requestBody);
        const fullName = validateFullName(requestBody.fullName);
        const email = validateEmail(requestBody.email);
        const pass = validatePassword(requestBody.password);
        if (fullName && email && pass) {
            //console.log("Inside 1st if")
            var filter = { email: requestBody.email };
            const userdetails = await credentialData.findOne(filter);
            console.log(userdetails)
            if (!userdetails) {
                credentialData.create({
                    fullName: requestBody.fullName,
                    email: requestBody.email,
                    password: requestBody.password
                }, function (err, success) {
                    console.log("data inserted successfully");
                });
                //return true;
                res.send({
                    isCreated: true,
                    data: {
                        email: email
                    }
                });
            }
            else {
                res.status(401).send({
                    isCreated: false,
                    msg: "user already exists"
                });
            }
        }
        else {
            //return false;     
            res.status(400).send({
                isCreated: false,
                msg: "Data missing or incorrect data"
            });
        }
    });

    app.post('/user/validate', async (req, res) => {
        console.log("inside api validate");
        const requestBody = req.body;
        const email = validateEmail(requestBody.email);
        const pass = validatePassword(requestBody.password);
        if (email && pass) {
            console.log(requestBody.email, requestBody.password);
            console.log("Inside 1st if validate")
            var filter = { email: requestBody.email, password: requestBody.password };
            const userdetails = await credentialData.findOne(filter);
            console.log(userdetails)
            if (userdetails) {
                //return  false;
                res.send({
                    exists: true,
                    data: {
                        email: email
                    }
                });
            }
            else {
                //return true;     
                
                res.status(401).send({
                    exists: false,
                    msg: "user not found"
                });
            }
        }
        else {
            res.status(400).send({
                exists: false,
                msg: "Enter proper data!"
            });
        }
    });
}

function validateUser(requestBody) {
    if (validateEmail(requestBody.email) && validateFullName(requestBody.fullName)) {
        if (validatePassword(requestBody.password)) {
            return true;
        }
        else {
            console.log("Wrong password");
            return false;
        }
    }
    else {
        console.log("Wrong email or full name");
        return false;
    }
}


function validateFullName(fullName) {
    if (fullName.length == "") {
        return false;
    } else if (fullName.length < 8) {
        return false;
    } else {
        return true;
    }
}

function validateEmail(email) {
    let regex = /[a-z0-9]+@northeastern.edu/;
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function validatePassword(password) {
    let regexp = /[A-Za-z0-9.@#!$%&*]{8,}/;
    if (password.length == "") {
        return false;
    }
    if (!regexp.test(password)) {
        return false;
    } else {
        return true;
    }
}