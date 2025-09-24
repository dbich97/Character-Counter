import React from 'react';

interface CounterCardProps {
  label: string;
  value: number | string;
  valueClassName?: string;
}

const CounterCard: React.FC<CounterCardProps> = ({ label, value, valueClassName }) => {
  const defaultValueClass = "text-3xl font-bold text-slate-800";
  return (
    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl text-center shadow-sm transition-transform hover:-translate-y-1 flex flex-col justify-center items-center min-h-[100px]">
      <span className={`${valueClassName || defaultValueClass}`}>
        {value}
      </span>
      <p className="text-base text-slate-500 mt-1 capitalize">{label}</p>
    </div>
  );
};

export default CounterCard;
