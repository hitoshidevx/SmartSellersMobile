import { object, string } from 'yup';

const produtoSchema = object({
    id: string().notRequired(),
    nomeProduto: string().required().min(5),
    descricaoProduto: string().required(),
    precoProduto: string().required()
});

export { produtoSchema }