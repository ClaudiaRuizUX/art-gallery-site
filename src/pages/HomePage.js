import React from 'react'

const HomePage = () => {
    return (
        <div>
            <h1>ArtGallery</h1>
            <section>
            <h2>Abstract Art</h2>
            <ul>
                <li>All</li>
                <li>Geometric</li>
                <li>Cold</li>
                <li>Warm</li>
                <li>Gestural</li>
            </ul>
            <div className="card-image">  
                <img src="/" alt="image" />
                <p>Project Tile</p>
            </div>
            <div className="card-image">  
                <img src="/" alt="image" />
                <p>Project Tile</p>
            </div>
            <div className="card-image">  
                <img src="/" alt="image" />
                <p>Project Tile</p>
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
            <div className="card-image">  
                <img src="/" alt="image" />
                <p>Project Tile</p>
            </div>
            <div className="card-image">  
                <img src="/" alt="image" />
                <p>Project Tile</p>
            </div>
            <div className="card-image">  
                <img src="/" alt="image" />
                <p>Project Tile</p>
            </div>
            </section>
        </div>
    );
}
export default HomePage;