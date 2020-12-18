import React from 'react';
import MostSearchedContainer from './MostSearchedContainer';

export default function MostSearched() {
    return (
        <div className="flex flex-col items-start justify-between">
            <div className="font-body font-bold text-4xl text-main-font">
                Top 10 most searched breeds
            </div>
            <div className="mt-12">
                <MostSearchedContainer></MostSearchedContainer>
                <MostSearchedContainer></MostSearchedContainer>
                <MostSearchedContainer></MostSearchedContainer>
                <MostSearchedContainer></MostSearchedContainer>
                <MostSearchedContainer></MostSearchedContainer>
            </div>
        </div>
    );
}
