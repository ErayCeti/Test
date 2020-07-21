const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");
const expressGraphql = require("express-graphql");
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const jwt = require("jsonwebtoken");
//DOTENV
dotenv.config({
  path:'./config/env/config.env'
});

//ApolloServer
const resolvers = require("./graphql/resolvers/index");

// Models
const User = require("./models/user");
const Not = require("./models/notes");
const Lesson = require("./models/lesson");
const server = new ApolloServer({
  typeDefs: importSchema("./graphql/sechema.graphql"),
  resolvers,
  context: ({ req }) => ({
    User,
    Not,
    Lesson,
    activeUser: req.activeUser
  }),
  introspection: true
});

//database
const database = require("./helpers/database/connectDatabase");
//MongoDb connect
database();

const optionsCors = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true,
  optionsSuccessStatus: 200,
};
const app = express();
app.use(async (req, res, next) => {
	const token = req.headers['authorization'];
	if (token && token !== 'null') {
	  try{
	  	const activeUser = await jwt.verify(token, process.env.SECRET_KEY, { expiresIn: process.env.JWT_EXPIRE });
	  	req.activeUser = activeUser;
			console.log(activeUser);
	  }catch (e) {
			console.log(e);
		}
	}
	next();
});
app.options(optionsCors, cors());
app.use(cors());
server.applyMiddleware({ app });
var port = process.env.PORT || 3009;

app.listen(port, () => {
  console.log("server started");
});
