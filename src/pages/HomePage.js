import React from 'react';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';


const HomePage = () => {
    return (
        <div>
            <h1>Art<span>Gallery</span></h1>
            <p className="slogan">Find Art by Themes or Styles</p>
        
            <section>
            <h3>Abstract Art</h3>
            <ul className="pills">
                <li><a className="active" href="">All</a></li>
                <li><a href="">Geometric</a></li>
                <li><a href="">Cold</a></li>
                <li><a href="">Warm</a></li>
                <li><a href="">Gestural</a></li>
            </ul>

            <div className="container">
                <div className="row">
                    <div className='col-md-4 py-3'>
                        <div className="card">
                            <img className="card-img-top mx-auto" src="https://via.placeholder.com/350x350" alt="350x350"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Another Project</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 py-3'>
                        <div className="card">
                            <img className="card-img-top mx-auto" src="https://via.placeholder.com/350x350" alt="350x350"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Another Project</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 py-3'>
                        <div className="card">
                            <img className="card-img-top mx-auto" src="https://via.placeholder.com/350x350" alt="350x350"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Another Project</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 py-3'>
                        <div className="card">
                            <img className="card-img-top mx-auto" src="https://via.placeholder.com/350x350" alt="350x350"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Another Project</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 py-3'>
                        <div className="card">
                            <img className="card-img-top mx-auto" src="https://via.placeholder.com/350x350" alt="350x350"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Another Project</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 py-3'>
                        <div className="card">
                            <img className="card-img-top mx-auto" src="https://via.placeholder.com/350x350" alt="350x350"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Another Project</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </section>

            <section>
            <h2>Nature Artworks</h2>
            <ul>
                <li>All</li>
                <li>Fruits</li>
                <li>Plants</li>
                <li>Animals</li>
                <li>Water</li>
            </ul>
            </section>
        </div>
    );
}
export default HomePage;