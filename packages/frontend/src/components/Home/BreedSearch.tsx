import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
async function getBreeds() {
    const res = await fetch('http://localhost:3000/api/breeds');
    const data = await res.json();
    return data;
}
export default function BreedSearch() {
    const [breeds, setBreeds] = useState([]);
    useEffect(() => {
        async function getBreeds() {
            const res = await fetch('http://localhost:3000/api/breeds');
            const data = await res.json();
            setBreeds(data);
        }
        getBreeds();
    }, []);

    return (
        <div className="flex flex-col items-start justify-between py-36 pl-24 h-full">
            <div className="bg-logo-white bg-no-repeat bg-cover w-80 h-24"></div>
            <div className="text-2xl font-body text-white py-8">
                Get to know more about your cat breed
            </div>
            <SearchBox options={breeds}></SearchBox>
        </div>
    );
}
