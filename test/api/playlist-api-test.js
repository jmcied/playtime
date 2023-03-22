import { EventEmitter } from "events";
import { assert } from "chai";
import { playtimeService } from "./playtime-service.js";
import { assertSubset } from "../test-utils.js";
import { maggie, mozart, testPlaylists } from "../fixtures.js";

EventEmitter.setMaxListeners(25);

suite("Playlist API tests", () => {

  setup(async () => {
  });

  teardown(async () => {});

  test("create playlist", async () => {
  });

  test("delete a playlist", async () => {
  });

  test("create multiple playlists", async () => {
  });

  test("remove non-existant playlist", async () => {
  });
});
