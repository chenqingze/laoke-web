## 生成protobuf 文件到src/app/im/lib
#node commonjs 使用 protoc --proto_path=./proto --js_out=library=protos_lib,binary:src/app/im/core/lib ./proto/*.proto
protoc --proto_path=./proto --js_out=import_style=commonjs,binary:src/app/im/core/lib ./proto/*.proto