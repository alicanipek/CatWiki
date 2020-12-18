import React from 'react';

export default function MostSearchedContainer() {
    return (
        <div className="flex flex-row">
            <div className="w-60 h-60 rounded-3xl bg-red-200 mb-14 mr-12"></div>
            <div className="flex flex-col w-11/12">
                <div className="font-body font-semibold text-main-font text-4xl mb-6">
                    1. Bengal
                </div>
                <div className="font-body font-medium text-main-font">
                    Bengals are a lot of fun to live with, but they're
                    definitely not the cat for everyone, or for first-time cat
                    owners. Extremely intelligent, curious and active, they
                    demand a lot of interaction and woe betide the owner who
                    doesn't provide it.
                </div>
            </div>
        </div>
    );
}
