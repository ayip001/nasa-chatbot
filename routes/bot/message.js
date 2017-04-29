/**
 * Created by arik on 4/29/16.
 */
const models = require(process.root + 'models');
var ChatController = require(process.root + 'controllers/chat');
var Promise = require('bluebird');
var assert = require('assert');

module.exports = Promise.coroutine(
function *(req, res, text){

  var messengerUser = req.messengerUser;
  const payload = {};

  try {
    var response = yield ChatController.sendMessage(messengerUser, payload);
  } catch (e) {
    console.log('here');
  }
  console.log('here');

});