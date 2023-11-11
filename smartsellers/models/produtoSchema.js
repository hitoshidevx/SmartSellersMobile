import { object, string } from 'yup';

const produtoSchema = object({
    nomeProduto: string().required().min(5),
    descricaoProduto: string().required(),
    precoProduto: int().required()
});

export { produtoSchema }