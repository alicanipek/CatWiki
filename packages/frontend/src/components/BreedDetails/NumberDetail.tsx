import React from 'react';

export default function NumberDetail({
    title,
    level,
}: {
    title: string;
    level: number;
}) {
    let l = [];
    let key = 0;
    let temp = 5 - level;
    while (level-- > 0) {
        l.push(
            <div key={++key} className="flex flex-col justify-center w-14 mx-2">
                <div className="h-3 bg-numberDetail-selected rounded-lg"></div>
            </div>
        );
    }
    while (temp-- > 0) {
        l.push(
            <div key={++key} className="flex flex-col justify-center w-14 mx-2">
                <div className="h-3 bg-numberDetail-normal rounded-lg"></div>
            </div>
        );
    }
    return (
        <div className="flex flex-row w-full py-4">
            <div className="w-1/5 font-body font-bold text-black mr-1">
                {title}:
            </div>
            <div className="flex flex-row w-4/5">{l}</div>
        </div>
    );
}
