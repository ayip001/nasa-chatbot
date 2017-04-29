/**
 * Created by arik on 4/29/16.
 */

var Promise = require('bluebird');
var request = require('request-promise');

var models = require(process.root + 'models');
var token = process.env.FB_TOKEN;

module.exports.generateLoginButton = function(req, messengerUser) {
  var bitgoOAuthBaseURL = 'https://test.bitgo.com/popup?clientId=messenger-client&scope=' + encodeURIComponent('openid profile wallet_view_all wallet_create');
  var oauthURL = bitgoOAuthBaseURL + '&state=' + encodeURIComponent(JSON.stringify({ mid: messengerUser.messengerID })) + '&redirectUri=' + encodeURIComponent(req.root + 'bitgo-auth');
  return [
    {
      type: 'web_url',
      url: oauthURL,
      title: 'Login'
    }
  ];
};

module.exports.generateAccountButtons = function(bitgoUser) {
  return [
    {
      title: 'View Wallets',
      type: 'postback',
      payload: JSON.stringify({ account: bitgoUser.username, action: 'view_wallets' })
    },
    {
      title: 'Logout',
      type: 'postback',
      payload: JSON.stringify({ account: bitgoUser.username, action: 'logout' })
    }
  ];
};

module.exports.sendMessage = Promise.coroutine(
function *sendMessage(recipient, payload) {
  var responseJSON = {
    recipient: { id: recipient.messengerID },
    message: payload
  };
  var requestOptions = {
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: token },
    method: 'POST',
    json: responseJSON
  };
  return request(requestOptions);
});