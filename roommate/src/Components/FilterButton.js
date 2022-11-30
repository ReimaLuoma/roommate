import React from 'react';

const FilterButton = ({filterName}) => {
    return (
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle btn-filter" type="button" data-bs-toggle="dropdown" aria-expanded="false">{filterName}</button>
          <ul className="dropdown-menu">
            <li>horror</li>
            <li>action</li>
            <li>family</li>
          </ul>
        </div>
    )
}

export default FilterButton;