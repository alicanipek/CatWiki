import React from 'react';
import BreedSearch from './BreedSearch';
import PopularBreeds from './PopularBreeds';
import WhyShouldYouHaveACat from './WhyShouldYouHaveACat';

export default function Home() {
    return (
        <div>
            <div className="bg-main-bg bg-home-cat bg-no-repeat bg-right-bottom rounded-3xl">
                <BreedSearch></BreedSearch>
                <PopularBreeds></PopularBreeds>
            </div>
            <WhyShouldYouHaveACat></WhyShouldYouHaveACat>
        </div>
    );
}
