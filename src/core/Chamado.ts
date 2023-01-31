
export default class Chamado {
    #id: string
    #nome: string
    #setor: string
    #descricao: string
    #timestamp: Date
    #completed_at: Date | null
    #isFinished: boolean

    constructor(nome: string, setor: string, descricao: string, id: string,  timestamp: Date, completed_at: Date | null, isFinished: boolean ) {
        this.#nome = nome
        this.#setor = setor
        this.#descricao = descricao 
        this.#id = id
        this.#timestamp = timestamp
        this.#completed_at = completed_at
        this.#isFinished = isFinished
    }

    static empty() {
        const date = new Date()
        return new Chamado('', '', '', '0', date, null, false)
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

    get timestamp() {
        return this.#timestamp
    }

    get completed_at() {
        return this.#completed_at
    }

    get isFinished() {
        return this.#isFinished
    }
}