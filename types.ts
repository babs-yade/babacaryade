import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  size: 'small' | 'medium' | 'large' | 'tall';
}

export interface Skill {
  title: string;
  desc: string;
  level: number; // 1-100
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum NavLink {
  HOME = 'accueil',
  ABOUT = 'apropos',
  EXPERIENCE = 'parcours',
  SKILLS = 'competences',
  PORTFOLIO = 'portfolio',
  TESTIMONIALS = 'temoignages',
  FAQ = 'faq',
  CONTACT = 'contact'
}