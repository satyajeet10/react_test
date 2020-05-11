const Login = require('../models/login');

module.exports = {
  findAll: function (req, res) {
    Login.find(req.query)
      .then((users) => res.json(users))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    Login.findById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    Login.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    Login.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    Login.findById({ _id: req.params.id })
      .then((user) => user.remove())
      .then((allusers) => res.json(allusers))
      .catch((err) => res.status(422).json(err));
  },
};
