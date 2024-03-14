import React from 'react';

const Home = ({ arrObj }) => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {arrObj.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div class="col">
                                    <div class="card h-100">
                                        {/* <img src="..." class="card-img-top" alt="..."> */}
                                        <div class="card-body">
                                            <h5 class="card-title">{item.id}</h5>
                                            <p class="card-text">{item.name}</p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-body-secondary">{item.designation}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}






            </div>
        </div>
    );
};

export default Home;