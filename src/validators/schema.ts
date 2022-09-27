import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Quer tutorial de como escrever email?")
    .required("Informe a porra do email também!"),
  password: yup
    .string()
    .min(6, "Pelo menos 6 dígitos caraio")
    .required("informe a droga da senha!"),
});

export const registerSchema = yup.object({
  username: yup.string().required("Informe o nominho mongolão"),
  email: yup
    .string()
    .email("Quer tutorial de como escrever email?")
    .required("Informe a porra do email também!"),
  password: yup
    .string()
    .min(6, "pelo menos 6 dígito caraio")
    .max(12, "só 12 F** digito!")
    .required("Não sabe uma senha, põe 123456"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser igual, Animal!")
    .required("Não vai sair daqui se nao por igual"),
});

export const debtSchema = yup.object({
  userId: yup.number().positive().integer().required("Selecione um mongolão"),
  debtId: yup
    .number()
    .positive()
    .integer()
    .required("tem que selecionar algo caraio"),
  comment: yup
    .string()
    .required("Descreva melhor para que seja julgado melhor"),
});
