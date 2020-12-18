import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SearchBox({ options }) {
    const [showList, setShowList] = useState(false);
    const [search, setSearch] = useState('');
    return (
        <>
            <div className="flex flex-col">
                <div className="relative text-gray-600 h-14">
                    <input
                        type="search"
                        name="serch"
                        placeholder="Search"
                        onClick={() => setShowList(!showList)}
                        onChange={(e) => {
                            setShowList(true);
                            setSearch(e.target.value);
                        }}
                        className="bg-white px-5 pr-10 rounded-full text-sm focus:outline-none h-full"
                        style={{ width: '394px' }}
                    />
                    {showList && (
                        <div className="flex flex-col bg-white text-black w-full max-h-56 mt-4 p-3 rounded-3xl">
                            <div className="p3 overflow-y-auto">
                                {options
                                    .filter((x) =>
                                        x.name
                                            .toLowerCase()
                                            .startsWith(search.toLowerCase())
                                    )
                                    .map((breed) => (
                                        <div
                                            key={breed.id}
                                            className="flex flex-col justify-center hover:bg-search-selected hover:bg-opacity-10 cursor-pointer w-full h-16 pl-4 rounded-xl"
                                        >
                                            <Link to={'/breed/' + breed.id}>
                                                {breed.name}
                                            </Link>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
