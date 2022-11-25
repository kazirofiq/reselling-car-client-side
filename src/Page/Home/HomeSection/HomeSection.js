import React from 'react';

const HomeSection = () => {
    return (
        <div className=''>
            <div className="card p-10 lg:card-side bg-base-100 shadow-xl">
            
            <div className='grid md:grid-cols-2'>
                <div>
                    <figure><img className='lg:w-full  mr-10' src="https://i.ibb.co/LJZBNFp/11-png.webp" alt="Album"/></figure>
                </div>

                <div>
                    <div className="card-body">
                    <h2 className="card-title">Garirbazar Reviews Episode 1</h2>
                    <p>The all-new CH-R G LED 1.8 Hybrid 2018 features the latest in technology and a futuristic design. It makes a bold statement and is a class leading Crossover. With an elevated ride height and coupe design it gives you a driving experience unlike any other. Call today to schedule a test drive for this magnificent unit!</p>
                    
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    <button className="btn btn-primary">Listen</button>
                    </div>
                    </div>
                </div>
            </div>

            </div>

            <div className="card lg:p-10 lg:card-side bg-base-100 shadow-xl">
            <div className='grid md:grid-cols-2'>
            <div className="card-body">
            <h2 className="card-title">Garirbazar Reviews Episode 2</h2>
            <p>Experience the best of both worlds with Toyota's 2016 Auris S Hybrid. Toyota's hybrid technology takes this hot hatch to the next level by balancing performance with efficiency. Equipped with the most advance features and TNGA design making the Auris an absolute head-turner. Check out our take on the Auris and if you are interested to know more about this vehicle, feel free to contact us.</p>
            
            <div className="card-actions justify-start">
            <button className="btn btn-primary">Listen</button>
            </div>
            </div>
            <figure><img className='w-full ml-10' src="https://i.ibb.co/6DD3X12/car-2.png" alt="Album"/></figure>
            </div>
            </div>
            
        </div>
    );
};

export default HomeSection;