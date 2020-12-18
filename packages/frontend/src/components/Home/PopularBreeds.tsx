import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PopularBreeds() {
    const [populars, setPopulars] = useState([]);
    useEffect(() => {
        async function getPopulars() {
            const res = await fetch(
                'http://localhost:3000/api/favorites?limit=4'
            );
            const data = await res.json();
            setPopulars(data);
        }
        getPopulars();
    }, []);
    let t = [];
    populars.forEach((x) => {
        t.push(
            <div key={x.name}>
                <div className="w-56 h-56">
                    <Link to={'/breed/' + x.id}>
                        <img
                            src={x.imageUrl}
                            alt=""
                            className="w-full h-full object-cover object-center rounded-3xl"
                        />
                    </Link>
                </div>
                <div className="text-lg text-main-font pt-5">
                    <Link to={'/breed/' + x.id}>{x.name}</Link>
                </div>
            </div>
        );
    });
    return (
        <div className="flex flex-row px-24 justify-between bg-main-fav rounded-b-3xl">
            <div className="flex flex-col w-full pt-8 pb-24">
                <div className="flex flex-row">
                    <div className="text-main-font">Most Searched Breed</div>
                </div>
                <div className="flex flex-row justify-between my-8">
                    <div className="max-w-xl text-5xl  text-main-font">
                        66+ Breeds For You To Discover
                    </div>
                    <div className="text-lg text-main-font place-self-end">
                        Read More
                    </div>
                </div>
                <div className="flex flex-row w-full justify-between">{t}</div>
            </div>
        </div>
    );
}
