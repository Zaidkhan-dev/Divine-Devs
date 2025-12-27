import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatItem {
  id: number;
  label: string;
  value: string;
  suffix: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
}