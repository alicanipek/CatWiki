import React from 'react';

export default function TextDetail({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-row w-full py-4">
            <div className="font-body font-bold text-black mr-1">{title}:</div>
            <div className="font-body font-medium text-black">{children}</div>
        </div>
    );
}
