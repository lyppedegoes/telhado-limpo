import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import {
  StyledForm,
  StyledTitle,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledNewMessageButton,
} from './Form.style';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSending(true);

      // Substitua o seguinte bloco de código pela lógica de envio real com Formspree
      const response = await fetch('https://formspree.io/f/mwkddnvo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsMessageSent(true);
        setIsError(false);

        // Limpe o formulário após o envio
        Object.keys(data).forEach((key) => {
          setValue(key as keyof FormData, '');
        });

        // Aguarde alguns segundos antes de redefinir o estado
        setTimeout(() => {
          setIsMessageSent(false);
          setIsSending(false);
        }, 5000);
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setIsError(true);
      setIsSending(false);
    }
  };

  const handleTryAgain = () => {
    setIsError(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {isMessageSent ? (
        <StyledTitle>
          SUA MENSAGEM FOI ENVIADA! LOGO ENTRAREMOS EM CONTATO!
          <StyledNewMessageButton type="button" onClick={() => setIsMessageSent(false)}>
            Enviar Nova Mensagem
          </StyledNewMessageButton>
        </StyledTitle>
      ) : isError ? (
        <StyledTitle style={{ color: 'red' }}>
          OPS! TIVEMOS UM PROBLEMA AO ENVIAR SUA MENSAGEM
          <StyledNewMessageButton type="button" onClick={handleTryAgain}>
            Tentar Novamente
          </StyledNewMessageButton>
        </StyledTitle>
      ) : (
        <>
          <StyledTitle>SE PREFERIR, ENVIE SUA MENSAGEM QUE LOGO ENTRAREMOS EM CONTATO</StyledTitle>
          <StyledLabel>
            Nome:
            <StyledInput {...register('name', { required: 'Nome é obrigatório' })} />
            {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
          </StyledLabel>
          <StyledLabel>
            Email:
            <StyledInput
              {...register('email', {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Email inválido',
                },
              })}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
          </StyledLabel>
          <StyledLabel>
            Telefone:
            <StyledInput
              {...register('phone', {
                required: 'Telefone é obrigatório',
                pattern: {
                  value: /^\d{2} \d{5} \d{4}$/,
                  message: 'Telefone inválido (formato esperado: 11 99999 9999)',
                },
              })}
            />
            {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
          </StyledLabel>
          <StyledLabel>
            Mensagem:
            <StyledTextArea {...register('message')} />
          </StyledLabel>
          {isSending ? (
            <StyledButton type="button" disabled>
              Enviando...
            </StyledButton>
          ) : (
            <StyledButton type="submit">Enviar</StyledButton>
          )}
        </>
      )}
    </StyledForm>
  );
};

export default Form;
