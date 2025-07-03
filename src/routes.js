import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes = [
	{
		method: "GET",
		path: "/products",
		controller: (req, res) => {
			return res.end("Lista de produtos!")
		},
	},
	{
		method: "POST",
		path: "/products",
		controller: (req, res) => {
			return res.writeHead(201).end(JSON.stringify(req.body))
		},
	},
	{
		method: "DELETE",
		path: "/products/:id",
		controller: (req, res) => {
			return res.end(`Produto de ID ${req.params.id} removido com sucesso!`)
		},
	},
].map((route) => ({
	...route,
	path: parseRoutePath(route.path),
}))
