const User = require('../models/user');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.read = (req, res) => {
    const userId = req.params.id;
    User.findById(userId).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    });
};

exports.update = (req, res) => {
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const { name,  mobile, address, collegeName, gitHub, linkedIn, resume, gender } = req.body;

    User.findOne({ _id: req.user._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        user.mobile = mobile;
        user.address = address;
        user.collegeName = collegeName;
        user.gitHub = gitHub;
        user.linkedIn = linkedIn;
        user.resume = resume;
        user.gender = gender;
        if (!name) {
            return res.status(400).json({
                error: 'Name is required'
            });
        } else {
            user.name = name;
        }

        // if (password == cPassword ) {
        //     if (password.length < 6) {
        //         return res.status(400).json({
        //             error: 'Password should be min 6 characters long'
        //         });
        //     } else {
        //         user.password = password;
        //     }
        // }
        // else{
        //     return res.status(400).json({
        //         error: 'Password not matched'
        //     });
        // }


        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            // updatedUser.hashed_password = undefined;
            // updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};

// exports.update = async (req, res) => {
    
// } 

exports.updatePassword = (req, res) => {
    const { password, cPassword } = req.body;
    User.findOne({ _id: req.user._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
       

        if (password == cPassword ) {
            if (password.length < 6) {
                return res.status(400).json({
                    error: 'Password should be min 6 characters long'
                });
            } else {
                user.password = password;
            }
        }
        else{
            return res.status(400).json({
                error: 'Password not matched'
            });
        }

        user.save((err, updatedPassword) => {
            if (err) {
                console.log('Password  UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'Password update failed'
                });
            }
            updatedPassword.hashed_password = undefined;
            updatedPassword.salt = undefined;
            res.json(updatedPassword);
        });
    });
}


exports.contactForm = (req, res) => {
    const { name, email, message } = req.body;
    const emailData = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `Contact form Message`,
        html: `
            <h1>This message has from ${name}</h1>
            <hr />
            <h5>Name: ${name}<br>
            Email: ${email}<bR>
            message: ${message}
            </h5>
            <p>This email may contain sensetive information</p>
            <p>${process.env.CLIENT_URL}</p>
        `
    };

    sgMail
        .send(emailData)
        .then(sent => {
            // console.log('SIGNUP EMAIL SENT', sent)
            return res.json({
                message: `Your Message has been sent Successfully`
            });
        })
        .catch(err => {
            // console.log('SIGNUP EMAIL SENT ERROR', err)
            return res.json({
                message: err.message
            });
        });
};