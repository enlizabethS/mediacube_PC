"use client";
import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const TestimonialsContainer = styled.section`
  padding: 50px 20px;
  background-color: #ffffff;
`;

const TestimonialCard = styled(motion.div)<{ children?: React.ReactNode }>`
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;



const TestimonialText = styled.p`
  font-size: 1rem;
  color: #333;
`;

const Author = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: #666;
  margin-top: 10px;
`;

const testimonials = [
  { text: "Mediacube помог увеличить наш доход на 20%.", author: "Иван Петров" },
  { text: "Отличный сервис и поддержка. Рекомендую всем!", author: "Анна Иванова" },
  { text: "Сотрудничество с Mediacube - лучшее решение.", author: "Алексей Смирнов" },
];

const TestimonialsSection = () => (
  <TestimonialsContainer>
    {testimonials.map((testimonial, index) => (
      <TestimonialCard
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
      >
        <TestimonialText>&quot;{testimonial.text}&quot;</TestimonialText>
        <Author>- {testimonial.author}</Author>
      </TestimonialCard>
    ))}
  </TestimonialsContainer>
);

export default TestimonialsSection;

