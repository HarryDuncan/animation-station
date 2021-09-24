# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: audioNode.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='audioNode.proto',
  package='audioNode',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x0f\x61udioNode.proto\x12\taudioNode\"C\n\x15InitControllerRequest\x12\x16\n\x0e\x61udioFileNames\x18\x01 \x03(\t\x12\x12\n\ntrackIndex\x18\x02 \x01(\x05\"6\n\x16InitControllerResponse\x12\r\n\x05reply\x18\x01 \x01(\t\x12\r\n\x05\x65rror\x18\x02 \x01(\x08\" \n\x0e\x43ontrolRequest\x12\x0e\n\x06\x61\x63tion\x18\x01 \x01(\t\"$\n\x0eStreamResponse\x12\x12\n\nstreamData\x18\x01 \x01(\t\"\x1b\n\tAudioData\x12\x0e\n\x06points\x18\x01 \x03(\x01\"/\n\x0fServiceResponse\x12\r\n\x05reply\x18\x01 \x01(\t\x12\r\n\x05\x65rror\x18\x02 \x01(\x08\"\"\n\rVolumeRequest\x12\x11\n\tnewVolume\x18\x01 \x01(\x05\" \n\x0bSeekRequest\x12\x11\n\tseekPoint\x18\x01 \x01(\x05\x32\xfe\x03\n\x10\x41udioNodeService\x12Y\n\x12InitializeControls\x12 .audioNode.InitControllerRequest\x1a!.audioNode.InitControllerResponse\x12\x43\n\tPlayTrack\x12\x19.audioNode.ControlRequest\x1a\x19.audioNode.StreamResponse0\x01\x12\x43\n\nPauseTrack\x12\x19.audioNode.ControlRequest\x1a\x1a.audioNode.ServiceResponse\x12?\n\x06Rewind\x12\x19.audioNode.ControlRequest\x1a\x1a.audioNode.ServiceResponse\x12@\n\x07\x46orward\x12\x19.audioNode.ControlRequest\x1a\x1a.audioNode.ServiceResponse\x12\x41\n\tSetVolume\x12\x18.audioNode.VolumeRequest\x1a\x1a.audioNode.ServiceResponse\x12?\n\tSeekTrack\x12\x16.audioNode.SeekRequest\x1a\x1a.audioNode.ServiceResponseb\x06proto3'
)




_INITCONTROLLERREQUEST = _descriptor.Descriptor(
  name='InitControllerRequest',
  full_name='audioNode.InitControllerRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='audioFileNames', full_name='audioNode.InitControllerRequest.audioFileNames', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='trackIndex', full_name='audioNode.InitControllerRequest.trackIndex', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=30,
  serialized_end=97,
)


_INITCONTROLLERRESPONSE = _descriptor.Descriptor(
  name='InitControllerResponse',
  full_name='audioNode.InitControllerResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='reply', full_name='audioNode.InitControllerResponse.reply', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='error', full_name='audioNode.InitControllerResponse.error', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=99,
  serialized_end=153,
)


_CONTROLREQUEST = _descriptor.Descriptor(
  name='ControlRequest',
  full_name='audioNode.ControlRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='action', full_name='audioNode.ControlRequest.action', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=155,
  serialized_end=187,
)


_STREAMRESPONSE = _descriptor.Descriptor(
  name='StreamResponse',
  full_name='audioNode.StreamResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='streamData', full_name='audioNode.StreamResponse.streamData', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=189,
  serialized_end=225,
)


_AUDIODATA = _descriptor.Descriptor(
  name='AudioData',
  full_name='audioNode.AudioData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='points', full_name='audioNode.AudioData.points', index=0,
      number=1, type=1, cpp_type=5, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=227,
  serialized_end=254,
)


_SERVICERESPONSE = _descriptor.Descriptor(
  name='ServiceResponse',
  full_name='audioNode.ServiceResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='reply', full_name='audioNode.ServiceResponse.reply', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='error', full_name='audioNode.ServiceResponse.error', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=256,
  serialized_end=303,
)


_VOLUMEREQUEST = _descriptor.Descriptor(
  name='VolumeRequest',
  full_name='audioNode.VolumeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='newVolume', full_name='audioNode.VolumeRequest.newVolume', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=305,
  serialized_end=339,
)


_SEEKREQUEST = _descriptor.Descriptor(
  name='SeekRequest',
  full_name='audioNode.SeekRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='seekPoint', full_name='audioNode.SeekRequest.seekPoint', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=341,
  serialized_end=373,
)

DESCRIPTOR.message_types_by_name['InitControllerRequest'] = _INITCONTROLLERREQUEST
DESCRIPTOR.message_types_by_name['InitControllerResponse'] = _INITCONTROLLERRESPONSE
DESCRIPTOR.message_types_by_name['ControlRequest'] = _CONTROLREQUEST
DESCRIPTOR.message_types_by_name['StreamResponse'] = _STREAMRESPONSE
DESCRIPTOR.message_types_by_name['AudioData'] = _AUDIODATA
DESCRIPTOR.message_types_by_name['ServiceResponse'] = _SERVICERESPONSE
DESCRIPTOR.message_types_by_name['VolumeRequest'] = _VOLUMEREQUEST
DESCRIPTOR.message_types_by_name['SeekRequest'] = _SEEKREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

InitControllerRequest = _reflection.GeneratedProtocolMessageType('InitControllerRequest', (_message.Message,), {
  'DESCRIPTOR' : _INITCONTROLLERREQUEST,
  '__module__' : 'audioNode_pb2'
  # @@protoc_insertion_point(class_scope:audioNode.InitControllerRequest)
  })
_sym_db.RegisterMessage(InitControllerRequest)

InitControllerResponse = _reflection.GeneratedProtocolMessageType('InitControllerResponse', (_message.Message,), {
  'DESCRIPTOR' : _INITCONTROLLERRESPONSE,
  '__module__' : 'audioNode_pb2'
  # @@protoc_insertion_point(class_scope:audioNode.InitControllerResponse)
  })
_sym_db.RegisterMessage(InitControllerResponse)

ControlRequest = _reflection.GeneratedProtocolMessageType('ControlRequest', (_message.Message,), {
  'DESCRIPTOR' : _CONTROLREQUEST,
  '__module__' : 'audioNode_pb2'
  # @@protoc_insertion_point(class_scope:audioNode.ControlRequest)
  })
_sym_db.RegisterMessage(ControlRequest)

StreamResponse = _reflection.GeneratedProtocolMessageType('StreamResponse', (_message.Message,), {
  'DESCRIPTOR' : _STREAMRESPONSE,
  '__module__' : 'audioNode_pb2'
  # @@protoc_insertion_point(class_scope:audioNode.StreamResponse)
  })
_sym_db.RegisterMessage(StreamResponse)

AudioData = _reflection.GeneratedProtocolMessageType('AudioData', (_message.Message,), {
  'DESCRIPTOR' : _AUDIODATA,
  '__module__' : 'audioNode_pb2'
  # @@protoc_insertion_point(class_scope:audioNode.AudioData)
  })
_sym_db.RegisterMessage(AudioData)

ServiceResponse = _reflection.GeneratedProtocolMessageType('ServiceResponse', (_message.Message,), {
  'DESCRIPTOR' : _SERVICERESPONSE,
  '__module__' : 'audioNode_pb2'
  # @@protoc_insertion_point(class_scope:audioNode.ServiceResponse)
  })
_sym_db.RegisterMessage(ServiceResponse)

VolumeRequest = _reflection.GeneratedProtocolMessageType('VolumeRequest', (_message.Message,), {
  'DESCRIPTOR' : _VOLUMEREQUEST,
  '__module__' : 'audioNode_pb2'
  # @@protoc_insertion_point(class_scope:audioNode.VolumeRequest)
  })
_sym_db.RegisterMessage(VolumeRequest)

SeekRequest = _reflection.GeneratedProtocolMessageType('SeekRequest', (_message.Message,), {
  'DESCRIPTOR' : _SEEKREQUEST,
  '__module__' : 'audioNode_pb2'
  # @@protoc_insertion_point(class_scope:audioNode.SeekRequest)
  })
_sym_db.RegisterMessage(SeekRequest)



_AUDIONODESERVICE = _descriptor.ServiceDescriptor(
  name='AudioNodeService',
  full_name='audioNode.AudioNodeService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=376,
  serialized_end=886,
  methods=[
  _descriptor.MethodDescriptor(
    name='InitializeControls',
    full_name='audioNode.AudioNodeService.InitializeControls',
    index=0,
    containing_service=None,
    input_type=_INITCONTROLLERREQUEST,
    output_type=_INITCONTROLLERRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='PlayTrack',
    full_name='audioNode.AudioNodeService.PlayTrack',
    index=1,
    containing_service=None,
    input_type=_CONTROLREQUEST,
    output_type=_STREAMRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='PauseTrack',
    full_name='audioNode.AudioNodeService.PauseTrack',
    index=2,
    containing_service=None,
    input_type=_CONTROLREQUEST,
    output_type=_SERVICERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Rewind',
    full_name='audioNode.AudioNodeService.Rewind',
    index=3,
    containing_service=None,
    input_type=_CONTROLREQUEST,
    output_type=_SERVICERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Forward',
    full_name='audioNode.AudioNodeService.Forward',
    index=4,
    containing_service=None,
    input_type=_CONTROLREQUEST,
    output_type=_SERVICERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='SetVolume',
    full_name='audioNode.AudioNodeService.SetVolume',
    index=5,
    containing_service=None,
    input_type=_VOLUMEREQUEST,
    output_type=_SERVICERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='SeekTrack',
    full_name='audioNode.AudioNodeService.SeekTrack',
    index=6,
    containing_service=None,
    input_type=_SEEKREQUEST,
    output_type=_SERVICERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_AUDIONODESERVICE)

DESCRIPTOR.services_by_name['AudioNodeService'] = _AUDIONODESERVICE

# @@protoc_insertion_point(module_scope)
