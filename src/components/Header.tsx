"use client";
import React from "react";
import styled from "@emotion/styled";
import { motion, MotionProps } from "framer-motion";

type MotionAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.RefAttributes<HTMLAnchorElement> & MotionProps;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(motion.div)<{ children?: React.ReactNode }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const StyledLink = styled(motion.a)<MotionAnchorProps>`
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const Header = () => (
  <Nav>
    <Logo initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Mediacube
    </Logo>
    <NavLinks>
      {["Креаторам", "Бизнесу", "Контакты", "Войти"].map((text, index) => (
        <StyledLink
          href="#"
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          {text}
        </StyledLink>
      ))}
    </NavLinks>
  </Nav>
);

export default Header;
