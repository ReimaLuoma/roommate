import React from 'react';
import MultipleSelectPlaceholder from './MultipleSelectPlaceholder';
import Search from './Search';

const Filters = () => {

    return (
        <section>
            <div className="row">
                <div className="col-xl-6 col-lg-8 col-md-12 filter-columns mb-lg-5">
                    <MultipleSelectPlaceholder placeholder={"genres"} />
                    <MultipleSelectPlaceholder placeholder={"duration"} />
                </div>
                <div className="col-xl-6 col-lg-4 col-md-12 d-flex justify-content-end mb-5 mt-5">
                    <Search />
                </div>
            </div>
      </section>
    )
}

export default Filters;