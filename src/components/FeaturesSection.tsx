"use client";
import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaDollarSign, FaTools, FaComments } from "react-icons/fa";

const FeaturesContainer = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
`;

const FeaturesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FeatureItem = styled(motion.li)<{ children?: React.ReactNode }>`
  font-size: 1.2rem;
  color: #333;
  display: flex;
  gap: 10px;
`;


const features = [
  { icon: <FaDollarSign />, text: "Монетизация" },
  { icon: <FaTools />, text: "Генерация дохода" },
  { icon: <FaComments />, text: "Поддержка 24/7" },
];

const FeaturesSection = () => (
  <FeaturesContainer>
    <h2 color="black">Основные компоненты нашей экосистемы</h2>
    <FeaturesList>
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          {feature.icon} {feature.text}
        </FeatureItem>
      ))}
    </FeaturesList>
  </FeaturesContainer>
);

export default FeaturesSection;
