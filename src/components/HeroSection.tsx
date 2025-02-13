"use client";
import React from "react";
import styled from "@emotion/styled";
import { motion, MotionProps } from "framer-motion";

type MotionAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.RefAttributes<HTMLAnchorElement> &
  MotionProps;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 20px;
  background-color: #f9f9f9;
`;

const Title = styled(motion.h1)<{ children?: React.ReactNode }>`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  line-height: 1.2;
`;

const Subtitle = styled(motion.p)<{ children?: React.ReactNode }>`
  font-size: 1.2rem;
  color: #666;
  margin-top: 20px;
`;

const CTAButton = styled(motion.a)<MotionAnchorProps>`
  margin-top: 40px;
  padding: 15px 30px;
  background-color: #0070f3;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    background-color: #005bb5;
  }
`;

const HeroSection = () => (
  <HeroContainer>
    <Title initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
      Помогаем креаторам раскрыть свой полный потенциал
    </Title>
    <Subtitle initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      Мы предоставляем инструменты и услуги для создания контента.
    </Subtitle>
    <CTAButton
      href="#"
      initial={{ scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Зарегистрируйтесь, это бесплатно
    </CTAButton>
  </HeroContainer>
);

export default HeroSection;
