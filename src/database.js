import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
	database = {}

  constructor() {
    this.persist()
  }

  persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.database))
  }

	insert(table, data) {
		/*
      O que estou tentando fazer aqui eh, verificando dentro da minha colecao se existe essa tabela.
    */
		if (Array.isArray(this.database[table])) {
			this.database[table].push(data)
		} else {
			// se nao existir, entao eu crio uma nova tabela passando o dado
			this.database[table] = [data]
		}
	}

	select(table) {
		return this.database[table]
	}
}
 