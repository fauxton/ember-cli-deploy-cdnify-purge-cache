/* jshint node: true */
'use strict';
var request = require('request');
var BasePlugin = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-cdnify-purge-cache',
  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      requiredConfig: ['cdnifyResourceId', 'cdnifyApiKey'],

      didDeploy: function(context) {
        let config = context.config['cdnify-purge-cache']
        let apiKey = config['cdnifyApiKey'];
        let resourceId = config['cdnifyResourceId'];

        let endpoint = `cdnify.com/api/v1/resources/${resourceId}/cache`;
        let credentials = `${apiKey}:x`;

        var self = this;

        return new Promise(function(resolve, reject) {
          request({
            url: `https://${credentials}@${endpoint}`,
            method: "DELETE"
          }, function(error, response, body) {
            if(error) {
              self.log("CDNIFY CACHE *NOT* PURGED!", { verbose: true });
              reject(error);
            } else {
              self.log("CDNIFY CACHE PURGED!", { verbose: true });
              resolve(body);
            }
          })
        });
      }
    });

    return new DeployPlugin();
  }
};
