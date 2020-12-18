import React, { useEffect, useState } from 'react';
import NumberDetail from './NumberDetail';
import BreedPhotos from './BreedPhotos';
import TextDetail from './TextDetail';
import { useLocation, useParams } from 'react-router-dom';

export default function BreedDetails() {
    const [breed, setBreed] = useState([]);
    const [referencePhoto, setReferencePhoto] = useState('');
    const { id } = useParams<{ id }>();
    useEffect(() => {
        async function getBreed() {
            const res = await fetch('http://localhost:3000/api/breeds/' + id);
            const data = await res.json();
            setBreed(data);
            const photores = await fetch(
                'http://localhost:3000/api/image/' + data[0].reference_image_id
            );
            const photo = await photores.json();
            setReferencePhoto(photo.url);
        }
        getBreed();
    }, []);

    return (
        <>
            {breed[0] ? (
                <>
                    <div className="flex flex-row">
                        <div className="w-1/3 h-96 mx-14">
                            <img
                                src={referencePhoto}
                                alt=""
                                className="w-full h-full object-cover object-center rounded-3xl"
                            />
                        </div>
                        <div className="w-2/3 mx-14">
                            <div className="font-body text-main-font text-4xl mb-3">
                                {breed[0].name}
                            </div>
                            <div className="font-body text-main-font break-words py-3">
                                {breed[0].description}
                            </div>
                            <div className="flex flex-col py-3">
                                <TextDetail title="Temperament">
                                    {breed[0].temperament}
                                </TextDetail>
                                <TextDetail title="Origin">
                                    {breed[0].origin}
                                </TextDetail>
                                <TextDetail title="Life Span">
                                    {breed[0].life_span}
                                </TextDetail>
                                <NumberDetail
                                    title="Adaptability"
                                    level={breed[0].adaptability}
                                ></NumberDetail>
                                <NumberDetail
                                    title="Affection Level"
                                    level={breed[0].affection_level}
                                ></NumberDetail>
                                <NumberDetail
                                    title="Child Friendly"
                                    level={breed[0].child_friendly}
                                ></NumberDetail>
                                <NumberDetail
                                    title="Intelligence"
                                    level={breed[0].intelligence}
                                ></NumberDetail>
                                <NumberDetail
                                    title="Health Issues"
                                    level={breed[0].health_issues}
                                ></NumberDetail>
                                <NumberDetail
                                    title="Social Needs"
                                    level={breed[0].social_needs}
                                ></NumberDetail>
                                <NumberDetail
                                    title="Stranger Friendly"
                                    level={breed[0].stranger_friendly}
                                ></NumberDetail>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <BreedPhotos breedId={breed[0].id}></BreedPhotos>
                    </div>
                </>
            ) : (
                'loading'
            )}
        </>
    );
}
