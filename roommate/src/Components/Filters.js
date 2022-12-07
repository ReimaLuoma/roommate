import React from 'react';
import MultipleSelectPlaceholder from './MultipleSelectPlaceholder';
import Search from './Search';

const Filters = () => {

    return (
        <section>
            <div className="row">
                <div className="col-6 filter-columns mb-5">
                    <MultipleSelectPlaceholder placeholder={"genres"} />
                    <MultipleSelectPlaceholder placeholder={"duration"} />
                </div>
                <div className="col-6 d-flex justify-content-end mb-5 mt-5">
                    <Search />
                </div>
            </div>
      </section>
    )
}

export default Filters;