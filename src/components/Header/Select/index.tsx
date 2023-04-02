import { useState } from 'react';
import * as Styled from './styles';

type Option = {
  label: string;
  value: string
}

export type SelectProps = {
  options: Option[],
};

export const Select = ({options}:SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selected = options.find(option => option.value === selectedValue);
    setSelectedOption(selected || null);
  }

  return (
    <Styled.Container value={selectedOption?.value} onChange={handleSelect}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Styled.Container>
  );
};
