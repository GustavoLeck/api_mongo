export class CreatePessoa {
    async execute(pessoa){
        if(!pessoa.Nome){
            return {
                message: "Erro ao inserir registro, verifique o conteudo.",
                status: 422
            }
        }
        if(!pessoa.Sobrenome){
            return {
                message: "Erro ao inserir registro, verifique o conteudo.",
                status: 422
            }
        }
        if(!pessoa.Idade){
            return {
                message: "Erro ao inserir registro, verifique o conteudo.",
                status: 422
            }
        }
        if(!pessoa.Sexo){
            return {
                message: "Erro ao inserir registro, verifique o conteudo.",
                status: 422
            }
        }
        if (pessoa.Idade != Number) {
            return {
                message: "Erro ao inserir registro, verifique o conteudo.",
                status: 400
            }
        }
    }
}