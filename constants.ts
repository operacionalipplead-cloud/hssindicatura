import { FinancialData } from './types';

export const COLORS = {
  petrol_deep: "#031926",
  gold_premium: "#C9943C",
  ice_white: "#F0F4F8",
  graphite_solid: "#333333",
  metallic_grey: "#A9A9A9",
};

export const GRAPH_DATA: FinancialData[] = [
  { month: 'Jan', value: 102000 },
  { month: 'Fev', value: 115000 },
  { month: 'Mar', value: 134000 },
  { month: 'Abr', value: 156000 },
  { month: 'Mai', value: 189000 },
  { month: 'Jun', value: 210000 },
  { month: 'Jul', value: 245000 },
  { month: 'Ago', value: 278000 },
  { month: 'Set', value: 307000 },
];

export const EXPENSE_DATA: FinancialData[] = [
  { month: "JAN", value: 113737.65 },
  { month: "FEV", value: 189006.23 },
  { month: "MAR", value: 109122.54 },
  { month: "ABR", value: 127281.23 },
  { month: "MAI", value: 109500.87 },
  { month: "JUN", value: 99869.45 },
  { month: "JUL", value: 104226.27 },
  { month: "AGO", value: 111469.00 },
  { month: "SET", value: 105018.77 },
  { month: "OUT", value: 108656.23 },
  { month: "NOV", value: 96633.00 },
  { month: "DEZ", value: 83593.06 }
];

export const FOUNDER_STATS = [
  { 
    value: "+10", 
    label: "Anos de Mercado",
    description: "Experiência de campo resolvendo desde crises financeiras a problemas estruturais complexos."
  },
  { 
    value: "Gestão", 
    label: "Estratégica",
    description: "Trazemos a eficiência das grandes empresas: decisões baseadas em dados, não em 'achismo'."
  },
  { 
    value: "100%", 
    label: "Compliance & Legal",
    description: "Blindagem jurídica que protege o condomínio contra passivos trabalhistas e erros contratuais."
  },
  { 
    value: "Excelência", 
    label: "De Resultados",
    description: "Metodologia auditável. A gestão não depende de uma pessoa, mas de processos organizados e constantes."
  },
];