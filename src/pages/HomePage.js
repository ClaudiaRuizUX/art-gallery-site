import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "reactstrap";
import { ArrowRight } from 'react-bootstrap-icons';
import { blue } from '@material-ui/core/colors';


const HomePage = () => {
    return (
        <div>
            <section className="Branding-Left">
            <h1>Art<span>Gallery</span></h1>
            <p className="slogan">Find Art by Themes or Styles</p>
            </section>
        
            <section>
            
                <div>
                    <h3 className="justify-content-end" >Abstract Art
                    <Button  color="tertiary">✐ Edit Section </Button>
                    </h3>
                </div>
                <ul className="pills">
                    <li><a className="active" href="">All</a></li>
                    <li><a href="">Geometric</a> <a href="">X</a></li>
                    <li><a href="">Cold</a></li>
                    <li><a href="">Warm</a></li>
                    <li><a href="">Gestural</a></li>
                    <Button color="tertiary">+ Add Category</Button>
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
                    </div>
                </div>
                <Button className="layout-center" color="primary">+ Add Project </Button>
            </section>


           <section>
                <h3>Nature Artworks</h3>
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
                    </div>
                </div>
            </section>
            
            <Button className="layout-right" color="secondary">+ Add Section </Button>

            <section className="Branding-Center">
                <h1>Art<span>Gallery</span></h1>
                <p className="slogan">Find Art by Themes or Styles</p>
                <Button id="qsLoginBtn" color="primary" className="btn-margin">Login and Upload Art</Button>
            </section>
        </div>
    );
}
export default HomePage;