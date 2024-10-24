// src/App.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormInput from './components/FormInput';
import SelectField from './components/SelectField';
import SubmitButton from './components/SubmitButton';

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
  "Product Owner"
];

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Nome completo é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório'),
  position: Yup.string().required('Cargo pretendido é obrigatório')
});

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    localStorage.setItem('member', JSON.stringify(data));
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormInput label="Nome completo" type="text" name="fullName" register={register} errors={errors} />
        <FormInput label="E-mail" type="email" name="email" register={register} errors={errors} />
        <FormInput label="Telefone" type="tel" name="phone" register={register} errors={errors} />
        <SelectField label="Cargo pretendido" name="position" register={register} errors={errors} options={positions} />
        <SubmitButton text="Cadastrar" />
      </form>
    </div>
  );
}

export default App;
