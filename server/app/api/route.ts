const message = {
  model: 'gemma-3-12b-it',
  messages: [
    { role: 'system', content: 'Always answer in rhymes. Today is Thursday' },
    { role: 'user', content: 'What day is it today?' },
  ],
  temperature: 0.7,
  max_tokens: -1,
  stream: false,
}

// curl -X POST http://localhost:3000/api -d '{}' 测试可以通

export async function POST() {
  const res = await fetch('http://localhost:1234/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })
  const data = await res.json()

  return Response.json({ data })
}
