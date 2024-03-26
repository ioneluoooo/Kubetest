const supertest = require("supertest");
const app = require("../index.js");
describe("GET /will", () => {
  it("respond with hello world", (done) => {
    supertest(app).get("/will").expect("Hello world", done);
  });
});
