import React from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';

function Banner() {
    return (
        <div className='banner'>
            
            <div className='banner_search'>
                <Button className='banner_searchButton'
                variant='outlined'>Rechercher une date 

                </Button>
            </div>





            <div className='banner_info'>
                <h1>Resrvez les meilleurs hôtels au meilleur prix</h1> 
            <h5>Phrase à trouver</h5>
            <Button variant='outlined'>Explorer</Button>
            </div>
        </div>
    )
}

export default Banner
