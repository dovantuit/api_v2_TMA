const User = require('../models').User;

module.exports = {

    getAllUsers(req, res) {

        try {

            const userCollection = User.find({});

            res.status(201).send(userCollection);

        }
        catch (e) {
            console.log(e);

            res.status(500).send(e);
        }

    },

    create(req, res) {
        try {
            const userCollection = User
                .create({
                    email: req.body.email,
                });

            res.status(201).send(userCollection);
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }

    },

    update(req, res) {

        try {
            const userCollection = User.find({
                id: req.params.userId
            });

            if (userCollection) {

                const updatedUser = User.update({
                    id: req.body.email
                });

                res.status(201).send(updatedUser)

            }
            else {

                res.status(404).send("User Not Found");
            }

        }
        catch (e) {
            console.log(e);

            res.status(500).send(e);

        }
    }


}