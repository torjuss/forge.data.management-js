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
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BaseAttributesCreatedUpdated', 'model/BaseAttributesCreatedUpdatedAttributes', 'model/BaseAttributesExtensionObject', 'model/CreateItem', 'model/CreateRef', 'model/CreateStorage', 'model/CreateVersion', 'model/Folder', 'model/Health', 'model/Hub', 'model/Item', 'model/JsonApiAttributes', 'model/JsonApiCollection', 'model/JsonApiDocument', 'model/JsonApiDocumentBase', 'model/JsonApiError', 'model/JsonApiLink', 'model/JsonApiLinks', 'model/JsonApiLinksPaging', 'model/JsonApiLinksRelated', 'model/JsonApiLinksSelf', 'model/JsonApiMeta', 'model/JsonApiMetaLink', 'model/JsonApiRelationships', 'model/JsonApiRelationshipsLinksExternalResource', 'model/JsonApiRelationshipsLinksInternal', 'model/JsonApiRelationshipsLinksInternalResource', 'model/JsonApiRelationshipsLinksRefs', 'model/JsonApiRelationshipsLinksRefsLinks', 'model/JsonApiResource', 'model/JsonApiTypeId', 'model/JsonApiVersion', 'model/JsonApiVersionJsonapi', 'model/Project', 'model/RelRef', 'model/Storage', 'model/Version', 'api/FoldersApi', 'api/HubsApi', 'api/ItemsApi', 'api/ProjectsApi', 'api/VersionsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BaseAttributesCreatedUpdated'), require('./model/BaseAttributesCreatedUpdatedAttributes'), require('./model/BaseAttributesExtensionObject'), require('./model/CreateItem'), require('./model/CreateRef'), require('./model/CreateStorage'), require('./model/CreateVersion'), require('./model/Folder'), require('./model/Health'), require('./model/Hub'), require('./model/Item'), require('./model/JsonApiAttributes'), require('./model/JsonApiCollection'), require('./model/JsonApiDocument'), require('./model/JsonApiDocumentBase'), require('./model/JsonApiError'), require('./model/JsonApiLink'), require('./model/JsonApiLinks'), require('./model/JsonApiLinksPaging'), require('./model/JsonApiLinksRelated'), require('./model/JsonApiLinksSelf'), require('./model/JsonApiMeta'), require('./model/JsonApiMetaLink'), require('./model/JsonApiRelationships'), require('./model/JsonApiRelationshipsLinksExternalResource'), require('./model/JsonApiRelationshipsLinksInternal'), require('./model/JsonApiRelationshipsLinksInternalResource'), require('./model/JsonApiRelationshipsLinksRefs'), require('./model/JsonApiRelationshipsLinksRefsLinks'), require('./model/JsonApiResource'), require('./model/JsonApiTypeId'), require('./model/JsonApiVersion'), require('./model/JsonApiVersionJsonapi'), require('./model/Project'), require('./model/RelRef'), require('./model/Storage'), require('./model/Version'), require('./api/FoldersApi'), require('./api/HubsApi'), require('./api/ItemsApi'), require('./api/ProjectsApi'), require('./api/VersionsApi'));
  }
}(function(ApiClient, BaseAttributesCreatedUpdated, BaseAttributesCreatedUpdatedAttributes, BaseAttributesExtensionObject, CreateItem, CreateRef, CreateStorage, CreateVersion, Folder, Health, Hub, Item, JsonApiAttributes, JsonApiCollection, JsonApiDocument, JsonApiDocumentBase, JsonApiError, JsonApiLink, JsonApiLinks, JsonApiLinksPaging, JsonApiLinksRelated, JsonApiLinksSelf, JsonApiMeta, JsonApiMetaLink, JsonApiRelationships, JsonApiRelationshipsLinksExternalResource, JsonApiRelationshipsLinksInternal, JsonApiRelationshipsLinksInternalResource, JsonApiRelationshipsLinksRefs, JsonApiRelationshipsLinksRefsLinks, JsonApiResource, JsonApiTypeId, JsonApiVersion, JsonApiVersionJsonapi, Project, RelRef, Storage, Version, FoldersApi, HubsApi, ItemsApi, ProjectsApi, VersionsApi) {
  'use strict';

  /**
   * Asynchronous Javascript/Node.js library for the Autodesk Forge Data Management API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ForgeDataManagement = require('index'); // See note below*.
   * var xxxSvc = new ForgeDataManagement.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ForgeDataManagement.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ForgeDataManagement.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ForgeDataManagement.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The BaseAttributesCreatedUpdated model constructor.
     * @property {module:model/BaseAttributesCreatedUpdated}
     */
    BaseAttributesCreatedUpdated: BaseAttributesCreatedUpdated,
    /**
     * The BaseAttributesCreatedUpdatedAttributes model constructor.
     * @property {module:model/BaseAttributesCreatedUpdatedAttributes}
     */
    BaseAttributesCreatedUpdatedAttributes: BaseAttributesCreatedUpdatedAttributes,
    /**
     * The BaseAttributesExtensionObject model constructor.
     * @property {module:model/BaseAttributesExtensionObject}
     */
    BaseAttributesExtensionObject: BaseAttributesExtensionObject,
    /**
     * The CreateItem model constructor.
     * @property {module:model/CreateItem}
     */
    CreateItem: CreateItem,
    /**
     * The CreateRef model constructor.
     * @property {module:model/CreateRef}
     */
    CreateRef: CreateRef,
    /**
     * The CreateStorage model constructor.
     * @property {module:model/CreateStorage}
     */
    CreateStorage: CreateStorage,
    /**
     * The CreateVersion model constructor.
     * @property {module:model/CreateVersion}
     */
    CreateVersion: CreateVersion,
    /**
     * The Folder model constructor.
     * @property {module:model/Folder}
     */
    Folder: Folder,
    /**
     * The Health model constructor.
     * @property {module:model/Health}
     */
    Health: Health,
    /**
     * The Hub model constructor.
     * @property {module:model/Hub}
     */
    Hub: Hub,
    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item: Item,
    /**
     * The JsonApiAttributes model constructor.
     * @property {module:model/JsonApiAttributes}
     */
    JsonApiAttributes: JsonApiAttributes,
    /**
     * The JsonApiCollection model constructor.
     * @property {module:model/JsonApiCollection}
     */
    JsonApiCollection: JsonApiCollection,
    /**
     * The JsonApiDocument model constructor.
     * @property {module:model/JsonApiDocument}
     */
    JsonApiDocument: JsonApiDocument,
    /**
     * The JsonApiDocumentBase model constructor.
     * @property {module:model/JsonApiDocumentBase}
     */
    JsonApiDocumentBase: JsonApiDocumentBase,
    /**
     * The JsonApiError model constructor.
     * @property {module:model/JsonApiError}
     */
    JsonApiError: JsonApiError,
    /**
     * The JsonApiLink model constructor.
     * @property {module:model/JsonApiLink}
     */
    JsonApiLink: JsonApiLink,
    /**
     * The JsonApiLinks model constructor.
     * @property {module:model/JsonApiLinks}
     */
    JsonApiLinks: JsonApiLinks,
    /**
     * The JsonApiLinksPaging model constructor.
     * @property {module:model/JsonApiLinksPaging}
     */
    JsonApiLinksPaging: JsonApiLinksPaging,
    /**
     * The JsonApiLinksRelated model constructor.
     * @property {module:model/JsonApiLinksRelated}
     */
    JsonApiLinksRelated: JsonApiLinksRelated,
    /**
     * The JsonApiLinksSelf model constructor.
     * @property {module:model/JsonApiLinksSelf}
     */
    JsonApiLinksSelf: JsonApiLinksSelf,
    /**
     * The JsonApiMeta model constructor.
     * @property {module:model/JsonApiMeta}
     */
    JsonApiMeta: JsonApiMeta,
    /**
     * The JsonApiMetaLink model constructor.
     * @property {module:model/JsonApiMetaLink}
     */
    JsonApiMetaLink: JsonApiMetaLink,
    /**
     * The JsonApiRelationships model constructor.
     * @property {module:model/JsonApiRelationships}
     */
    JsonApiRelationships: JsonApiRelationships,
    /**
     * The JsonApiRelationshipsLinksExternalResource model constructor.
     * @property {module:model/JsonApiRelationshipsLinksExternalResource}
     */
    JsonApiRelationshipsLinksExternalResource: JsonApiRelationshipsLinksExternalResource,
    /**
     * The JsonApiRelationshipsLinksInternal model constructor.
     * @property {module:model/JsonApiRelationshipsLinksInternal}
     */
    JsonApiRelationshipsLinksInternal: JsonApiRelationshipsLinksInternal,
    /**
     * The JsonApiRelationshipsLinksInternalResource model constructor.
     * @property {module:model/JsonApiRelationshipsLinksInternalResource}
     */
    JsonApiRelationshipsLinksInternalResource: JsonApiRelationshipsLinksInternalResource,
    /**
     * The JsonApiRelationshipsLinksRefs model constructor.
     * @property {module:model/JsonApiRelationshipsLinksRefs}
     */
    JsonApiRelationshipsLinksRefs: JsonApiRelationshipsLinksRefs,
    /**
     * The JsonApiRelationshipsLinksRefsLinks model constructor.
     * @property {module:model/JsonApiRelationshipsLinksRefsLinks}
     */
    JsonApiRelationshipsLinksRefsLinks: JsonApiRelationshipsLinksRefsLinks,
    /**
     * The JsonApiResource model constructor.
     * @property {module:model/JsonApiResource}
     */
    JsonApiResource: JsonApiResource,
    /**
     * The JsonApiTypeId model constructor.
     * @property {module:model/JsonApiTypeId}
     */
    JsonApiTypeId: JsonApiTypeId,
    /**
     * The JsonApiVersion model constructor.
     * @property {module:model/JsonApiVersion}
     */
    JsonApiVersion: JsonApiVersion,
    /**
     * The JsonApiVersionJsonapi model constructor.
     * @property {module:model/JsonApiVersionJsonapi}
     */
    JsonApiVersionJsonapi: JsonApiVersionJsonapi,
    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project: Project,
    /**
     * The RelRef model constructor.
     * @property {module:model/RelRef}
     */
    RelRef: RelRef,
    /**
     * The Storage model constructor.
     * @property {module:model/Storage}
     */
    Storage: Storage,
    /**
     * The Version model constructor.
     * @property {module:model/Version}
     */
    Version: Version,
    /**
     * The FoldersApi service constructor.
     * @property {module:api/FoldersApi}
     */
    FoldersApi: FoldersApi,
    /**
     * The HubsApi service constructor.
     * @property {module:api/HubsApi}
     */
    HubsApi: HubsApi,
    /**
     * The ItemsApi service constructor.
     * @property {module:api/ItemsApi}
     */
    ItemsApi: ItemsApi,
    /**
     * The ProjectsApi service constructor.
     * @property {module:api/ProjectsApi}
     */
    ProjectsApi: ProjectsApi,
    /**
     * The VersionsApi service constructor.
     * @property {module:api/VersionsApi}
     */
    VersionsApi: VersionsApi
  };

  return exports;
}));
