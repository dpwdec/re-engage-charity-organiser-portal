let mongoose = require("mongoose");

beforeAll((done) => {
  mongoose.connect("mongodb://localhost/re_engage_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", () => {
    done();
  });
});

afterAll(function (done) {
  mongoose.connection.close(true, () => {
    done();
  });
});
