# Rythmic-Trip Applications
Desktop Application for music visualisation

## Generate Protos


### AudioNode Service
- compile typescript client proto

protoc protos/audioNode.proto  \
--js_out=import_style=commonjs,binary:./src/links/audioNode \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/links/audioNode

- generate python proto

python -m grpc_tools.protoc -I./protos --python_out=./audioNode --grpc_python_out=. ./protos/audioNode.proto


### Docker Manager Service

- compile typescript client proto

protoc protos/dockerManager.proto  \
--js_out=import_style=commonjs,binary:./src/links/dockerManager \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/links/dockerManager

- generate node proto

protoc protos/dockerManager.proto  \
--js_out=import_style=commonjs,binary:./dockerManager

## Build Docker Images
build
- docker-compose -f docker-compose.yml build
run
- docker-compose -f docker-compose.yml up -d

docker ps
~/Users/harry/Desktop/Techno/YTP.aiff
