// #!/bin/bash

reset_server() {
    echo "正在执行清理操作..."
    lms unload --all
    lms server stop
}

reset_server

lms server start
lms load lmstudio-community/gemma-3-12b-it-GGUF/gemma-3-12b-it-Q3_K_L.gguf
lms server status