import React from 'react';

export default function Footer() {
    return (
        <div className="flex flex-row justify-between w-full h-24 bg-black rounded-t-3xl">
            <div className="bg-logo-white bg-no-repeat bg-contain bg-center w-20 h-8 ml-32 my-8"></div>
            <div className="font-body font-extralight text-white p-9">
                Ali Can İPEK- devchallenge.io 2020
            </div>
        </div>
    );
}
