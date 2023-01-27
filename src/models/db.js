 import { userMemStore } from "./mem/user-mem-store.js";
 import { playlistMemStore } from "./mem/playlist-mem-store.js";
import { trackMemStore } from "./mem/track-mem-store.js";

// import { userJsonStore } from "./json/user-json-store.js";
// import { playlistJsonStore } from "./json/playlist-json-store.js";
// import { trackJsonStore } from "./json/track-json-store.js";

export const db = {
  userStore: null,
  playlistStore: null,
  trackStore: null, 
/*
  init() {
    this.userStore = userJsonStore;                  // change from userMemStore
    this.playlistStore = playlistJsonStore;
    this.trackStore = trackJsonStore;
  }, */

  init() {
    this.userStore = userMemStore;                  // week 2 exercise 1
    this.playlistStore = playlistMemStore;
    this.trackStore = trackMemStore;
  },

};