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
    const {mail, password} = req.query;

    users.findOne({'mail': mail, 'password': password}, {}, (err, userRecord) => {
      if (err) {
        res.status(401).send(`${err.message} - failed to login.`);
      } else if (userRecord) {
        res.status(200).send("You're logged in the page!");
      } else {
        res.status(200).send("Registration not found on the database.")
      }
    })
  }
  
}

export default UserController;