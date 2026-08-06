import express from "express";
import { pathToFileURL } from "node:url";

export function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send("HEllo World");
  });

  return app;
}

export function startServer(port = process.env.PORT || 8080) {
  const app = createApp();

  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  return server;
}

const isMainModule =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMainModule) {
  startServer();
}
