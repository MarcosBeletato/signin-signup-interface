import users from "../models/User.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Sign-in/Sign-up API"})
  })

  app.use(
    express.json(),
    users
  )
}

export default routes;