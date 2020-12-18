import React, { useEffect, useState } from 'react';

export default function BreedPhotos({ breedId }: { breedId: string }) {
    const [otherPhotos, setOtherPhotos] = useState([]);
    useEffect(() => {
        async function getPhotos() {
            const otherPhotosres = await fetch(
                `http://localhost:3000/api/images/${breedId}?limit=8`
            );
            const otherPhotos = await otherPhotosres.json();
            setOtherPhotos(otherPhotos);
        }
        getPhotos();
    }, []);
    let t = [];
    otherPhotos.forEach((x) => {
        let cl = 'w-80 h-80 mb-16';
        let cr = 'w-80 h-80 mb-16 mr-20';

        t.push(
            <div key={x.id} className={t.length % 4 != 3 ? cr : cl}>
                <img
                    src={x.url}
                    alt=""
                    className="w-full h-full object-cover object-center rounded-3xl"
                />
            </div>
        );
    });
    return (
        <div className="flex flex-col">
            <div className="font-body font-semibold text-4xl text-main-font mb-10">
                Other Photos
            </div>
            <div className="flex flex-row flex-wrap">{t}</div>
        </div>
    );
}
