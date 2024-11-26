import React from 'react';
import '../styles/FilterButtons.css';

interface FilterButtonsProps {
  currentFilter: string;
  setFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, setFilter }) => {
  return (
    <div className="filter-buttons">
      {['All', 'Pending', 'Complete'].map(filter => (
        <button
          key={filter}
          className={currentFilter === filter ? 'active' : ''}
          onClick={() => setFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
