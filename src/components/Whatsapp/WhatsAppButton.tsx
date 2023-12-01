'use client';
import React, { useState, useEffect } from 'react';

import styled, { css } from 'styled-components';

// ... (importações)

interface WhatsAppButtonProps {
  clicked?: boolean;
  isVisible: boolean;
}

const Button = styled.a<WhatsAppButtonProps>`
  position: fixed;
  bottom: 16px;
  right: 28px;
  align-items: center;
  text-decoration: none;
  background-color: #0f93fe; /* Cor azul padrão da página */
  padding: 16px;
  border-radius: 16px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    opacity 0.3s,
    border 0.3s;

  &:hover {
    background-color: #45f46a;
    border-color: #45f46a;
  }

  ${(props) =>
    props.clicked &&
    css`
      animation: blink 0.5s infinite;
    `}

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  ${(props) =>
    !props.isVisible &&
    css`
      opacity: 0;
      pointer-events: none; // Impede interações quando invisível
    `}
`;

const Icon = styled.img`
  width: 38px;
  height: 38px;
`;

const WhatsAppButton: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const isScrolled = scrollY > 200;
      const isAtBottom = window.innerHeight + scrollY >= document.body.offsetHeight - 400;

      setIsVisible(isScrolled && !isAtBottom);
    };

    // Adiciona o listener de scroll quando o componente é montado
    window.addEventListener('scroll', handleScroll);

    // Remove o listener de scroll quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };

  return (
    <Button
      href="https://wa.me/5541984776712"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      clicked={clicked}
      isVisible={isVisible}
    >
      <Icon src="/icons/icon-whatsapp.svg" alt="WhatsApp Icon" />
    </Button>
  );
};

export default WhatsAppButton;
