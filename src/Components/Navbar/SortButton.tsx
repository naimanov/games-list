import React from 'react';

interface SortButtonProps {
  text: string;
  value: string;
  handleRadio: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortType: string;
}

function SortButton({ text, value, handleRadio, sortType }: SortButtonProps) {
  return (
    <div>
      <label
        htmlFor={'sort-button' + value}
        className={
          value === sortType ? 'sort-button sort-button-active' : 'sort-button'
        }
      >
        <span>{text}</span>
      </label>
      <input
        id={'sort-button' + value}
        type='radio'
        name='sort'
        className='radio-input'
        value={value}
        onChange={(e) => handleRadio(e)}
      />
    </div>
  );
}

export default SortButton;
