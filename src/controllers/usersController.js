import users from "../models/User.js";

class UserController {

  static registerUser = (req, res) => {
    let user = new users(req.body);

    user.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - failed to register.`});
      } else {
        res.status(201).send(user.toJSON());
      }
    })
  }

  static loginUser = (req, res) => {
    const login = req.query;

    users.find({'email': email, 'password': password}, {}, (err) => {
      if (err) {
        res.status(401).send(`${err.message} - failed to login.`);
      } else {
        res.status(200).send("You're logged in the page!");
      }
    })
  }
}

export default UserController;