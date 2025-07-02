export async function jsonBodyHandler(req, res) {
	// add cada chunk
  const buffers = []

  // coleta os chunks de dados da requisição
	for await (const chunk of req) {
		buffers.push(chunk)
	}

  try {
    // concatena os chunks e converte para string. em seguida converte a string para json
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    req.body = null
  }

  // definie o header de res como json
  res.setHeader("Content-Type", "application/json")
}
