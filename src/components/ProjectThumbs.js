import React from 'react';

const ProjectThumbs = (props) => {
    const { title} = props;
    return (
        <>
        <div className='col-md-4 py-3'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                </div>
            </div>
        </div>
        </>  
    );    
};  
export default ProjectThumbs;