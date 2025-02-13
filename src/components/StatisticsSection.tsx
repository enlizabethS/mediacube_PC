"use client";
import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StatsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 50px 20px;
  background-color: #ffffff;
`;

const StatCard = styled(motion.div)<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;


const StatNumber = styled(motion.h3)`
  font-size: 2rem;
  color: #333;
`;

const StatDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const stats = [
  { number: "120M+", description: "Отзывы о нас на Trustpilot" },
  { number: "$50M+", description: "Выплаты авторам" },
  { number: "132", description: "Страны, с которыми мы сотрудничаем" },
];

const StatisticsSection = () => (
  <StatsContainer>
    {stats.map((stat, index) => (
      <StatCard
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.3 }}
      >
        <StatNumber>{stat.number}</StatNumber>
        <StatDescription>{stat.description}</StatDescription>
      </StatCard>
    ))}
  </StatsContainer>
);

export default StatisticsSection;
