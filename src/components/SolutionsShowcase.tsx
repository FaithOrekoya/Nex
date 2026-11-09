import React from 'react';
import { WhoWeServe } from './WhoWeServe';
import { UserRole } from '../types';

interface SolutionsShowcaseProps {
  onCategoryClick: (category: string) => void;
}

export const SolutionsShowcase: React.FC<SolutionsShowcaseProps> = ({ onCategoryClick }) => {
  return (
    <WhoWeServe
      onSelectRole={(role: UserRole) => {
        onCategoryClick(role);
      }}
    />
  );
};
