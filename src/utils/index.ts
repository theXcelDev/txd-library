import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const formatNumber = (value: number) => {
  return value.toLocaleString('pt-BR', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
};

export const getDayOfMonth = (date: Date) => {
  return format(date, 'dd', { locale: ptBR });
};

export const getHours = (date: Date) => {
  return format(date, 'HH', { locale: ptBR });
};

export const getMinutes = (date: Date) => {
  return format(date, 'mm', { locale: ptBR });
};

export const getMonth = (date: Date) => {
  return format(date, 'LLLL', { locale: ptBR });
};

export const getYear = (date: Date) => {
  return format(date, 'yyyy', { locale: ptBR });
};
