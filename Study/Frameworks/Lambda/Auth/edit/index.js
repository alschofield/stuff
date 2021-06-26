const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcryptjs');
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.thutn.mongodb.net?retryWrites=true&w=majority`;

exports.handler = async (event) => {
  let response;
  const client = new MongoClient(url, { useUnifiedTopology: true });
  const body = JSON.parse(event.body)

  try {
    const mongoclient = await client.connect();
    const db = mongoclient.db('auth');
    const collection = db.collection('user');

    const salt = bcrypt.genSaltSync(10);
    body.password = await bcrypt.hash(body.password, salt);

    const user = await collection.updateOne({ username: body.username, password: body.password }, { $set: mapUser(JSON.parse(decodeURI(body))) }, { upsert: true });

    response = {
      statusCode: 200,
      body: JSON.stringify(user)
    };
  } catch (er) {
    response = {
      statusCode: 500,
      body: JSON.stringify(er)
    };
  }

  client.close();
  return response;
};

const mapUser = (user) => {
  if (user._id) delete user._id;

  return {
    portfolio: true,
    calculator: true,
    questions: true,
    songrecommendations: true,
    ...user
  }
}
