import { object, string } from 'yup';

const empresaSchema = object({
    nomeEmpresa: string().required().min(5),
    descricaoEmpresa: string().required(),
});

export { empresaSchema }