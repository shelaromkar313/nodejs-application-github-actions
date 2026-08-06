import test from "node:test";
import assert from "node:assert/strict";
import { once } from "node:events";
import { startServer } from "../index.js";

test("server responds with hello world", async () => {
  const server = startServer(0);
  await once(server, "listening");

  const address = server.address();
  assert.ok(address && typeof address === "object" && "port" in address);

  const response = await fetch(`http://127.0.0.1:${address.port}/`);
  assert.equal(await response.text(), "HEllo World");

  server.close();
  await once(server, "close");
});
