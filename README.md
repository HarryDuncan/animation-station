# AnimationStation
Desktop Application for music visualisation

- Built on react electron base with typescript and python server

compiled with docker and interfacing with grpc

## Generate Protos

- compile typescript client proto

protoc protos/audioNode.proto  \
--js_out=import_style=commonjs,binary:./src/links/audioNode \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/links/audioNode

- generate python  proto

python -m grpc_tools.protoc -I./protos --python_out=./audioNode --grpc_python_out=. ./protos/audioNode.proto

## Build Docker Images
build
- docker-compose -f docker-compose.yml build
run
- docker-compose -f docker-compose.yml up -d
