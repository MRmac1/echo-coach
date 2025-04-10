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