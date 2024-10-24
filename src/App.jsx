import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormInput from "./components/FormInput";
import SelectField from "./components/SelectField";
import SubmitButton from "./components/SubmitButton";

const positions = [
  "Desenvolvedor Frontend",
  "Desenvolvedor Backend",
  "Desenvolvedor Full Stack",
  "Desenvolvedor Mobile",
  "Desenvolvedor de Software",
  "Engenheiro de Software",
  "Arquiteto de Software",
  "UI/UX Designer",
  "Analista de Sistemas",
  "Analista Programador",
  "DevOps Engineer",
  "Engenheiro de Dados",
  "QA Engineer",
  "Scrum Master",
  "Product Owner",
];

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Nome completo é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Apenas números são permitidos") // Validação para aceitar apenas números no campo telefone
    .required("Telefone é obrigatório"),
  position: Yup.string().required("Cargo pretendido é obrigatório"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    localStorage.setItem("member", JSON.stringify(data));
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <nav className="min-h-screen bg-gradient-to-r from-red-900 via-black-900 to-purple-900 flex items-center justify-center">
      <div className="text-6xl font-bold text-right mb-6 text-gray-800 'animate-shake">
        <h1 className="animate-shake animate-infinite animate-duration-[5000ms] animate-ease-in-out animate-reverse">
          Formulário de Cadastro
        </h1>
        <p className="text-4xl text-green-500 text-right mb-6 animate-rotate-y animate-infinite animate-duration-[5000ms] animate-ease-in-out animate-normal">
          Desafio Front End Fusion
        </p>
      </div>
      <div className="max-w-xl mx-auto p-4 shadow-lg rounded-lg bg-white w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            label="Nome completo"
            type="text"
            name="fullName"
            register={register}
            errors={errors}
          />
          <FormInput
            label="E-mail"
            type="email"
            name="email"
            register={register}
            errors={errors}
          />
          <FormInput
            label="Telefone"
            type="tel"
            name="phone"
            register={register}
            errors={errors}
          />
          <SelectField
            label="Cargo pretendido"
            name="position"
            register={register}
            errors={errors}
            options={positions}
          />
          <SubmitButton
            text="Cadastrar"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          />
        </form>
        <p className="text-center mt-4 text-gray-500">
          React + Vite com YUP por Rodrigo Bergenthal!
        </p>
      </div>
    </nav>
  );
}

export default App;
