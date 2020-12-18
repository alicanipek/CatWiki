import React, { useEffect, useState } from 'react';

export default function WhyShouldYouHaveACat() {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getCats() {
            const res = await fetch(
                'http://localhost:3000/api/images/search?limit=3'
            );
            const data = await res.json();
            setCats(data);
            setLoading(false);
        }
        getCats();
    }, []);
    let t = cats && cats.length > 2 && (
        <>
            <div className="flex flex-col mr-8">
                <div className="w-60 h-1/3 mb-8">
                    <img
                        src={cats[0].url}
                        alt=""
                        className="w-full h-full object-cover object-center rounded-3xl"
                    />
                </div>
                <div className="    rounded-3xl w-52 h-2/3">
                    <img
                        src={cats[1].url}
                        alt=""
                        className="w-full h-full object-cover object-center rounded-3xl"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="rounded-3xl w-56 h-2/3">
                    <img
                        src={cats[2].url}
                        alt=""
                        className="w-full h-full object-cover object-center rounded-3xl"
                    />
                </div>
            </div>
        </>
    );
    return (
        <div className="flex flex-row px-24 py-20 justify-evenly">
            <div className="flex flex-col w-2/3 py-36">
                <div className="flex flex-row mb-12">
                    <div className="flex flex-col">
                        <div className="max-w-xl text-5xl text-main-font">
                            Why should you have a cat
                        </div>
                        <div className="max-w-xl text-lg text-main-font py-8">
                            Having a cat around you can actually trigger the
                            release of calming chemicals in your body which
                            lower your stress and anxiety leves
                        </div>
                        <div className="text-lg text-main-font opacity-60">
                            Read More
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-1/3">
                {!loading ? t : 'loading'}
            </div>
        </div>
    );
}
