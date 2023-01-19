import { PessoaRepository } from "../database/repository/pessoa-repository.js";

export class DeletePessoa{
    async execute(pessoa){
        if (!pessoa._id) {
            return {
                message: "Erro ao deletar registro, verifique o conteudo.",
                status: 422
            }
        }
        return await new PessoaRepository().deletePessoa(pessoa._id);
    }
}

