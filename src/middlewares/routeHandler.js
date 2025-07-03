import { Database } from "../database.js"
import { routes } from "../routes.js"
import { extractQueryParams } from "../utils/extract-query-params.js"

// utilizamos o database assim , para salvar em memoria, assim toda vez que iniciarmos a classe banco, seria uma nova.
const database = new Database()

export function routeHandler(req, res) {
	// procura uma rota que corresponda ao metodo e caminho da requisição, na nossa lsita de rotas que importamos
	const route = routes.find((route) => {
		// retornamos então, se o metodo da requisição for igual ao da nossa rota e o caminho da requisição for igual ao caminho da nossa rota
		return route.method === req.method && route.path.test(req.url)
	})

	if (route) {
		const routeParams = req.url.match(route.path)
		const { query, ...params } = routeParams.groups

		req.params = params
		req.query = query ? extractQueryParams(query) : {}

		return route.controller({ req, res, database })
	}

	return res.writeHead(404).end("Rota não encontrada!")
}
