import Image from 'next/image';
import React from 'react';
import { FaApple, FaGithub } from 'react-icons/fa';
import { SingleApp as SingleAppType, Source } from '@/types/AppstoreApp';

const sourceIcon = {
    [Source.AppStore]: FaApple,
    [Source.Github]: FaGithub,
};

const sourceStyle = {
    [Source.AppStore]: "border-neutral-100 border-opacity-30",
    [Source.Github]: "border-neutral-100 border-opacity-20",
};

export const SingleApp = React.memo(({ app }: { app: SingleAppType }) => {
    const Icon = sourceIcon[app.source];

    // Define the aspect ratio for the images
    const imageWidth = 16;
    const imageHeight = 9;

    return (
        <a
            href={app.link}
            className="m-2 group rounded-3xl border border-transparent px-1 py-1 bg-neutral-800/30 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-900"
            target={app.link}
            rel="noopener noreferrer"
        >
            <div className="relative w-full md:h-72 rounded-2xl overflow-hidden">
                <div className='absolute z-[10] right-4 top-4'>
                    <div className={`backdrop-blur-md flex items-center justify-center w-36 px-2 py-1.5 rounded-xl mx-2 border-2 ${sourceStyle[app.source]}`}>
                        <Icon className="w-6 h-6 mr-2" />
                        <span className="text-sm font-semibold">
                            {app.source === Source.AppStore ? 'App Store' : 'GitHub'}
                        </span>
                    </div>
                </div>
                <Image
                    src={'/' + app.bannerImage}
                    alt={`${app.name} - App Banner`}
                    layout='responsive'
                    width={imageWidth}
                    height={imageHeight}
                    placeholder='empty'
                />
            </div>
            <div className='m-4 text-left'>
                <h2 className="text-2xl font-semibold w-full">
                    {app.name}
                </h2>
                <p className="opacity-50">
                    {app.description}
                </p>
            </div>
        </a>
    );
});
