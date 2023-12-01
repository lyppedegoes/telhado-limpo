'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import {
  StyledForm,
  StyledFormContent,
  StyledTitle,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledNewMessageButton,
} from './Form.style.tsx';

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

  const formatPhone = (value: string) => {
    const phoneNumber = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const formattedPhoneNumber = phoneNumber.replace(/(\d{2})(\d{1,5})(\d{4})/, '$1 $2 $3');
    setValue('phone', formattedPhoneNumber);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormContent>
        {isMessageSent ? (
          <StyledTitle>
            SUA MENSAGEM FOI ENVIADA! LOGO ENTRAREMOS EM CONTATO!
            <div style={{ marginTop: '10px' }}>
              <StyledNewMessageButton type="button" onClick={() => setIsMessageSent(false)}>
                Enviar Nova Mensagem
              </StyledNewMessageButton>
            </div>
          </StyledTitle>
        ) : isError ? (
          <StyledTitle style={{ color: 'red', fontSize: '12px' }}>
            OPS! TIVEMOS UM PROBLEMA AO ENVIAR SUA MENSAGEM
            <div style={{ marginTop: '10px' }}>
              <StyledNewMessageButton type="button" onClick={handleTryAgain}>
                Tentar Novamente
              </StyledNewMessageButton>
            </div>
          </StyledTitle>
        ) : (
          <>
            <StyledTitle>
              SE PREFERIR, ENVIE SUA MENSAGEM QUE LOGO ENTRAREMOS EM CONTATO
            </StyledTitle>
            <StyledLabel>
              Nome:
              <StyledInput {...register('name')} />
            </StyledLabel>
            <StyledTitle style={{ fontSize: '12px', marginTop: '10px' }}>
              Preencha email ou telefone para que possamos entrar em contato
            </StyledTitle>
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
              {errors.email && (
                <span style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</span>
              )}
            </StyledLabel>
            <StyledLabel>
              Telefone:
              <StyledInput
                {...register('phone', {
                  pattern: {
                    value: /^\d{2} \d{1,5} \d{4}$/,
                    message: 'Telefone inválido (formato esperado: 11 99999 9999)',
                  },
                })}
                onChange={(e) => formatPhone(e.target.value)}
              />
              {errors.phone && (
                <span style={{ color: 'red', fontSize: '12px' }}>{errors.phone.message}</span>
              )}
            </StyledLabel>
            <StyledLabel>
              Mensagem:
              <StyledTextArea {...register('message')} />
            </StyledLabel>
            <div style={{ marginTop: '10px' }}>
              {isSending ? (
                <StyledButton type="button" disabled>
                  Enviando...
                </StyledButton>
              ) : (
                <StyledButton type="submit">Enviar</StyledButton>
              )}
            </div>
          </>
        )}
      </StyledFormContent>
    </StyledForm>
  );
};

export default Form;
