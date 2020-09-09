## 生成protobuf 文件到src/app/im/lib
# Closure Imports 
protoc --proto_path=./src/app/im/core/proto --js_out=library=proto_libs,binary:src/app/im/core/lib ./src/app/im/core/*.proto
# CommonJS imports 目前使用这种方式
protoc --proto_path=./src/app/im/core/proto --js_out=import_style=commonjs,binary:src/app/im/core/lib ./src/app/im/core/proto/*.proto
