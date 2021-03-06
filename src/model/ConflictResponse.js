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
    define(['ApiClient', 'model/JsonApiError', 'model/JsonApiVersionJsonapi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JsonApiError'), require('./JsonApiVersionJsonapi'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeDataManagement) {
      root.ForgeDataManagement = {};
    }
    root.ForgeDataManagement.ConflictResponse = factory(root.ForgeDataManagement.ApiClient, root.ForgeDataManagement.JsonApiError, root.ForgeDataManagement.JsonApiVersionJsonapi);
  }
}(this, function(ApiClient, JsonApiError, JsonApiVersionJsonapi) {
  'use strict';




  /**
   * The ConflictResponse model module.
   * @module model/ConflictResponse
   */

  /**
   * Constructs a new <code>ConflictResponse</code>.
   * @alias module:model/ConflictResponse
   * @class
   * @implements module:model/JsonApiError
   * @param errors {Array.<Object>} 
   */
  var exports = function(errors) {
    var _this = this;

    JsonApiError.call(_this, errors);
  };

  /**
   * Constructs a <code>ConflictResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConflictResponse} obj Optional instance to populate.
   * @return {module:model/ConflictResponse} The populated <code>ConflictResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      JsonApiError.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement JsonApiError interface:
  /**
   * @member {module:model/JsonApiVersionJsonapi} jsonapi
   */
exports.prototype['jsonapi'] = undefined;

  /**
   * @member {Array.<Object>} errors
   */
exports.prototype['errors'] = undefined;



  return exports;
}));


