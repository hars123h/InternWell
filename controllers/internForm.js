const InternshipForm = require('../models/InternForm');

exports.internForm = (req, res) => {
    InternshipForm.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                error: 'This email Already Exist'

            });
            const {
                email,
                name,
                hear,
                hire,
                course,
                story,
                linkedIn,
                resume
            } = req.body;

            const internshipForm = new InternshipForm({
                email,
                name,
                hear,
                hire,
                course,
                story,
                linkedIn,
                resume
            });

            internshipForm.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: 'Something went Wrong'
                    });
                }
                if (data) {
                    return res.status(201).json({
                        message: 'Form Submitted Successfully'
                    })
                }
            })

        })

}