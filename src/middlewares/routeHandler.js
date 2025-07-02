import { routes } from "../routes.js"

export function routeHandler(req, res) {
	// procura uma rota que corresponda ao metodo e caminho da requisição, na nossa lsita de rotas que importamos
	const route = routes.find((route) => {
		// retornamos então, se o metodo da requisição for igual ao da nossa rota e o caminho da requisição for igual ao caminho da nossa rota
		return route.method === req.method && route.path === req.url
	})

	if (route) return route.controller(req, res)

	return res.writeHead(404).end("Rota não encontrada!")
}
