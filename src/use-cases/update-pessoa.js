export class UpdatePessoa{
    async execute(reqbody){
        const body = reqbody;

        if (!body._id) {
            return {
                message: "Erro ao inserir registro, verifique o conteudo.",
                status: 422
            }
        }
        return body;
    }
}