const request = require("supertest");
const app = require("../index"); // Adjust the path as needed

describe("GET /", () => {
  it("should return Hello Sir!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello Sir!");
  });
});