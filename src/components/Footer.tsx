"use client";
import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  padding: 40px 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterLinks>
      <FooterLink href="#">Политика конфиденциальности</FooterLink>
      <FooterLink href="#">Условия использования</FooterLink>
      <FooterLink href="#">Контакты</FooterLink>
    </FooterLinks>
    <p>© 2025 Mediacube. Все права защищены.</p>
  </FooterContainer>
);

export default Footer;
