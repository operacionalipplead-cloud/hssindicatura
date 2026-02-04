import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SegmentationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FinancialData {
  month: string;
  value: number;
}

export interface StatItem {
  value: string;
  label: string;
}