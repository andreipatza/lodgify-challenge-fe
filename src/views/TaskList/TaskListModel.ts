export interface AccordionCategory {
  id: string;
  name: string;
  tasks: Task[];
  isOpen: boolean;
}

export interface Task {
  id: string;
  description: string;
  value: number;
  checked: boolean;
  normalizedValue: number;
}

export interface PercentageData {
  percents: number;
  totalNormalized: number;
}
