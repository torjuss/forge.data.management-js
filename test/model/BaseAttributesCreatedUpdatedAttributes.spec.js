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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ForgeDataManagement);
  }
}(this, function(expect, ForgeDataManagement) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ForgeDataManagement.BaseAttributesCreatedUpdatedAttributes();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BaseAttributesCreatedUpdatedAttributes', function() {
    it('should create an instance of BaseAttributesCreatedUpdatedAttributes', function() {
      // uncomment below and update the code to test BaseAttributesCreatedUpdatedAttributes
      //var instane = new ForgeDataManagement.BaseAttributesCreatedUpdatedAttributes();
      //expect(instance).to.be.a(ForgeDataManagement.BaseAttributesCreatedUpdatedAttributes);
    });

    it('should have the property createTime (base name: "createTime")', function() {
      // uncomment below and update the code to test the property createTime
      //var instane = new ForgeDataManagement.BaseAttributesCreatedUpdatedAttributes();
      //expect(instance).to.be();
    });

    it('should have the property createUserId (base name: "createUserId")', function() {
      // uncomment below and update the code to test the property createUserId
      //var instane = new ForgeDataManagement.BaseAttributesCreatedUpdatedAttributes();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedTime (base name: "lastModifiedTime")', function() {
      // uncomment below and update the code to test the property lastModifiedTime
      //var instane = new ForgeDataManagement.BaseAttributesCreatedUpdatedAttributes();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedUserId (base name: "lastModifiedUserId")', function() {
      // uncomment below and update the code to test the property lastModifiedUserId
      //var instane = new ForgeDataManagement.BaseAttributesCreatedUpdatedAttributes();
      //expect(instance).to.be();
    });

  });

}));
