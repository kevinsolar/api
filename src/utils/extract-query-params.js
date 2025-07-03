export function extractQueryParams(query) {
	return query
    //slice com valor de 1 para pegar tudo depois da primeira letra, ou seja, exlcuindo o ?
		.slice(1)
    //split para separar os parametros da url que concatenam com &
		.split("&")
    //reduce para percorrem a lista de itens criados acima
    .reduce((queryParams, param) => {

      //separar a chave do valor e criar um json/objeto
			const [key, value] = param.split("=")

			queryParams[key] = value

			return queryParams
		}, {})
}
