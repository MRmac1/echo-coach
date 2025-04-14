# Echo-Coach

- client 端使用 RN
- server 端使用 next.js 调用模型服务
- 模型服务使用 llm 启动或跟进一步使用 Transformers Pipeline 启动

model
使用 llama-cpp-python[server] 启动模型服务
```bash
pip install llama-cpp-python[server]
python3 -m llama_cpp.server --model /Users/zhoujicheng/.cache/lm-studio/models/lmstudio-community/gemma-3-12b-it-GGUF/gemma-3-12b-it-Q3_K_L.gguf
```
llama.cpp 启动
docker pull ghcr.io/ggml-org/llama.cpp:server
docker run -v /path/to/models:/models -p 8000:8000 ghcr.io/ggml-org/llama.cpp:server -m /models/7B/ggml-model-q4_0.gguf --port 8000 --host 0.0.0.0 -n 512
