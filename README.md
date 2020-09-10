## 生成protobuf 文件到src/app/im/lib
# Closure Imports 
```bash
protoc --proto_path=./src/app/im/core/proto --js_out=library=proto_libs,binary:src/app/im/core/lib ./src/app/im/core/*.proto
```
# CommonJS imports
```bash
protoc --proto_path=./src/app/im/core/proto --js_out=import_style=commonjs,binary:src/app/im/core/lib ./src/app/im/core/proto/*.proto
```
# ts-protoc-gen for typescript  目前采用这种方式
```bash

### Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

### Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./src/app/im/core/lib"


protoc \
    --proto_path=./src/app/im/core/proto \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    ./src/app/im/core/proto/*.proto
```

