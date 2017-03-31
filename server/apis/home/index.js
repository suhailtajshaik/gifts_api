'use strict';
const fs = require("fs");

const express = require('express');
const router = express.Router();
let config = require('../../config.js');
let db = require("./mock.json");
const _ = require('lodash');

let giftsByTag = (t) => {
  var out = _.filter(db, function (item) {
    return _.some(item.Tags, { "name": t });
  });
  return out;
};

router.get('/gifts', function (req, res) {
  res.status(200).json(db);
});

router.get('/gifts/tag/:tag', function (req, res) {
  let e = giftsByTag(req.params.tag);
  res.status(200).json(e);
});

module.exports = router;