import express from "express";
import request from "supertest";
import fibRoute from "../src/fibRoute";

const app = express();
app.use("/fib/:num", fibRoute);

describe("rest", () => {
  it("fib zero test", async () => {
    const response = await request(app).get("/fib/0");
    expect(response.text).not.toBeNull();
    expect(response.text).toEqual("Fibonacci(0) is 0");
  });

  it("fib 1 test", async () => {
    const response = await request(app).get("/fib/1");
    expect(response.text).not.toBeNull();
    expect(response.text).toEqual("Fibonacci(1) is 1");
  });

  it("fib negative test", async () => {
    const response = await request(app).get("/fib/-2");
    expect(response.text).not.toBeNull();
    expect(response.text).toEqual("Fibonacci(-2) is undefined");
  });

  it("fib 21 test", async () => {
    const response = await request(app).get("/fib/21");
    expect(response.text).not.toBeNull();
    expect(response.text).toEqual("Fibonacci(21) is 10946");
  });
});
