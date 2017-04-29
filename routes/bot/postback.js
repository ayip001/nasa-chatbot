/**
 * Created by arik on 4/29/16.
 */

var models = require(process.root + 'models');
var ChatController = require(process.root + 'controllers/chat');
var Promise = require('bluebird');
var assert = require('assert');

module.exports = Promise.coroutine(
function *(req, res, postback){

  var account = postback.account;
  var action = postback.action;

  // we got the associated bitgo user!
  var messengerUser = req.messengerUser;

  // TODO: process actions


});