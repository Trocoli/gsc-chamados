
export default class Chamado {
    #id: string
    #nome: string
    #setor: string
    #descricao: string

    constructor(nome: string, setor: string, descricao: string, id: string  ) {
        this.#nome = nome
        this.#setor = setor
        this.#descricao = descricao 
        this.#id = id
    }

    static empty() {
        return new Chamado('', '', '', '0' )
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get setor(){ 
        return this.#setor
    }

    get descricao() {
        return this.#descricao
    }
}