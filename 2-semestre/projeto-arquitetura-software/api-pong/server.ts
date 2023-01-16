import { Request, Response } from "express";

const express = require("express");
const app = express();

app.get("*/:msg", (request: Request, response: Response) => {
  const { msg } = request.params;

  if (msg.toLocaleLowerCase() === "ping") {
    response.send("pong");
  } else if (msg.toLocaleLowerCase() === "pong") {
    response.send("ping");
  } else {
    response.send("Mensagem inválida. Enviar ping ou pong");
  }
});

app.listen(3000, () => console.log("server started at port 3000"));
