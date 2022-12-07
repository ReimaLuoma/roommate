import React from 'react';
import MultipleSelectPlaceholder from './MultipleSelectPlaceholder';
import Search from './Search';

const Filters = () => {

    return (
        <section className="container">
        <div className="row">
          <div className="col-6 filter-columns">
            <MultipleSelectPlaceholder placeholder={"genres"} />
            <MultipleSelectPlaceholder placeholder={"duration"} />
          </div>
          <div className="col-6">
            <Search />
          </div>
        </div>
      </section>
    )
}

export default Filters;