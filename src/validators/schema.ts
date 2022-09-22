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
    .max(6, "só 6 F** digito!")
    .required("Não sabe uma senha, põe 123456"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null, "a senhas tem que ser igual, animal!"])
    .required("Não vai sair daqui se nao por igual"),
});
