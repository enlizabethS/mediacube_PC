"use client";

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = motion(
  styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-left: 10px;
  `
);

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const StyledLink = motion(
  styled.a`
    font-size: 1rem;
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      text-decoration: underline;
    }
  `
);

const LoginButton = motion(
  styled.button`
    font-size: 1rem;
    color: #ffffff;
    background-color: #0070f3;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: #005bb5;
    }
  `
);

const Header = () => (
  <Nav>
    {/* Логотип */}
    <LogoContainer>
      <Image src="/images/icon.png" alt="Mediacube Logo" width={40} height={40} />
      <LogoText initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Mediacube
      </LogoText>
    </LogoContainer>

    {/* Навигационные ссылки */}
    <NavLinks>
      {["Креаторам", "Бизнесу", "Компания"].map((text, index) => (
        <StyledLink
          key={index}
          href="#"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          {text}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            width={16}
            height={16}
          >
            <path d="M9 18l6-6-6-6" />
          </motion.svg>
        </StyledLink>
      ))}
      {/* Кнопка "Войти" */}
      <LoginButton
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Войти
      </LoginButton>
    </NavLinks>
  </Nav>
);

export default Header;
