/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Hub', 'model/JsonApiCollection', 'model/JsonApiVersionJsonapi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Hub'), require('./JsonApiCollection'), require('./JsonApiVersionJsonapi'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeDataManagement) {
      root.ForgeDataManagement = {};
    }
    root.ForgeDataManagement.HubsResponse = factory(root.ForgeDataManagement.ApiClient, root.ForgeDataManagement.Hub, root.ForgeDataManagement.JsonApiCollection, root.ForgeDataManagement.JsonApiVersionJsonapi);
  }
}(this, function(ApiClient, Hub, JsonApiCollection, JsonApiVersionJsonapi) {
  'use strict';




  /**
   * The HubsResponse model module.
   * @module model/HubsResponse
   */

  /**
   * Constructs a new <code>HubsResponse</code>.
   * @alias module:model/HubsResponse
   * @class
   * @implements module:model/JsonApiCollection
   * @param data {Array.<module:model/Hub>} 
   */
  var exports = function(data) {
    var _this = this;

    JsonApiCollection.call(_this, data);

  };

  /**
   * Constructs a <code>HubsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HubsResponse} obj Optional instance to populate.
   * @return {module:model/HubsResponse} The populated <code>HubsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      JsonApiCollection.constructFromObject(data, obj);
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Hub]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Hub>} data
   */
  exports.prototype['data'] = undefined;

  // Implement JsonApiCollection interface:
  /**
   * @member {module:model/JsonApiVersionJsonapi} jsonapi
   */
exports.prototype['jsonapi'] = undefined;

  /**
   * @member {Array.<module:model/JsonApiResource>} data
   */
exports.prototype['data'] = undefined;



  return exports;
}));


