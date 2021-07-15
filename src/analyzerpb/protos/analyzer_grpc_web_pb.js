/**
 * @fileoverview gRPC-Web generated client stub for analyzer
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.analyzer = require('./analyzer_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.analyzer.TrackAnalyzerServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.analyzer.TrackAnalyzerServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.analyzer.InitRequest,
 *   !proto.analyzer.InitResponse>}
 */
const methodDescriptor_TrackAnalyzerService_InitAnalyzer = new grpc.web.MethodDescriptor(
  '/analyzer.TrackAnalyzerService/InitAnalyzer',
  grpc.web.MethodType.UNARY,
  proto.analyzer.InitRequest,
  proto.analyzer.InitResponse,
  /**
   * @param {!proto.analyzer.InitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.analyzer.InitResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.analyzer.InitRequest,
 *   !proto.analyzer.InitResponse>}
 */
const methodInfo_TrackAnalyzerService_InitAnalyzer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.analyzer.InitResponse,
  /**
   * @param {!proto.analyzer.InitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.analyzer.InitResponse.deserializeBinary
);


/**
 * @param {!proto.analyzer.InitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.analyzer.InitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.analyzer.InitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.analyzer.TrackAnalyzerServiceClient.prototype.initAnalyzer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/analyzer.TrackAnalyzerService/InitAnalyzer',
      request,
      metadata || {},
      methodDescriptor_TrackAnalyzerService_InitAnalyzer,
      callback);
};


/**
 * @param {!proto.analyzer.InitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.analyzer.InitResponse>}
 *     Promise that resolves to the response
 */
proto.analyzer.TrackAnalyzerServicePromiseClient.prototype.initAnalyzer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/analyzer.TrackAnalyzerService/InitAnalyzer',
      request,
      metadata || {},
      methodDescriptor_TrackAnalyzerService_InitAnalyzer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.analyzer.AudioData,
 *   !proto.analyzer.DataPoints>}
 */
const methodDescriptor_TrackAnalyzerService_AnalyzeStream = new grpc.web.MethodDescriptor(
  '/analyzer.TrackAnalyzerService/AnalyzeStream',
  grpc.web.MethodType.UNARY,
  proto.analyzer.AudioData,
  proto.analyzer.DataPoints,
  /**
   * @param {!proto.analyzer.AudioData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.analyzer.DataPoints.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.analyzer.AudioData,
 *   !proto.analyzer.DataPoints>}
 */
const methodInfo_TrackAnalyzerService_AnalyzeStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.analyzer.DataPoints,
  /**
   * @param {!proto.analyzer.AudioData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.analyzer.DataPoints.deserializeBinary
);


/**
 * @param {!proto.analyzer.AudioData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.analyzer.DataPoints)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.analyzer.DataPoints>|undefined}
 *     The XHR Node Readable Stream
 */
proto.analyzer.TrackAnalyzerServiceClient.prototype.analyzeStream =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/analyzer.TrackAnalyzerService/AnalyzeStream',
      request,
      metadata || {},
      methodDescriptor_TrackAnalyzerService_AnalyzeStream,
      callback);
};


/**
 * @param {!proto.analyzer.AudioData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.analyzer.DataPoints>}
 *     Promise that resolves to the response
 */
proto.analyzer.TrackAnalyzerServicePromiseClient.prototype.analyzeStream =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/analyzer.TrackAnalyzerService/AnalyzeStream',
      request,
      metadata || {},
      methodDescriptor_TrackAnalyzerService_AnalyzeStream);
};


module.exports = proto.analyzer;

