const NewsLetter = require('../models/newsLetter')

exports.newsLeterForm = (req, res) => {
    NewsLetter.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                error: 'Email is taken'

            });
            const {
                email
            } = req.body;

            const newsLetter = new NewsLetter({
              email
            });

            newsLetter.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: 'Something went Wrong'
                    });
                }
                if (data) {
                    return res.status(201).json({
                        message: 'Email Submitted Successfully'
                    })
                }
            })

        })
   

}