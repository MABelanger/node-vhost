"use strict";
// express vhost path
var vhost = require("vhost");
var express = require("express");
var path = require("path");

module.exports = function (app) {
  var reactCalendarDir = path.join(__dirname, "../app/dist/react-calendar");
  var reactAdminDir = path.join(__dirname, "../app/dist/react-admin");
  var zeleDir = path.join(__dirname, "../app/dist/zele");

  // https://github.com/reactjs/react-router/blob/1.0.x/docs/guides/basics/Histories.md
  app.use(vhost("www.blackandrouge.com", express.static(reactCalendarDir))); // Serves first app
  app.use(vhost("admin.blackandrouge.com", express.static(reactAdminDir))); // Serves second app
  app.use(vhost("zele.co", express.static(zeleDir))); // Serves zele.co webpage
};
