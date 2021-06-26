const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcryptjs');
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.thutn.mongodb.net?retryWrites=true&w=majority`;

exports.handler = async (event) => {
  let response;
  const client = new MongoClient(url, { useUnifiedTopology: true });
  const body = JSON.parse(event.body);

  try {
    const mongoclient = await client.connect();
    const db = mongoclient.db('auth');
    const collection = db.collection('users');

    const user = await collection.findOne({ username: body.username });
    const authenticated = await bcrypt.compare(body.password, user.password);

    response = {
      statusCode: 200,
      body: JSON.stringify((authenticated) ? user : {})
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
