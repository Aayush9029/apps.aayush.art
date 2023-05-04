import Image from 'next/image'
import React from 'react'
import { FaApple, FaGithub } from 'react-icons/fa'
import { SingleApp, Source } from '@/types/AppstoreApp'
export function SingleApp(app: SingleApp) {
    return (
        <a
            href={app.link}
            className="m-2 group rounded-3xl border border-transparent px-1 py-1 bg-neutral-800/30 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-900"
            target={app.link}
            rel="noopener noreferrer"
        >

            <div>

                <div
                    className="relative w-full md:h-72 rounded-2xl overflow-hidden"
                >
                    <div className=' absolute z-[10] right-4 bottom-4' >

                        {
                            app.source == Source.AppStore ? (

                                <div className="backdrop-blur-md flex items-center justify-center w-36 px-2 py-1.5 rounded-xl mx-2 border-neutral-100 border-2 border-opacity-30"
                                >
                                    <FaApple className="w-6 h-6 mr-2" />
                                    <span className="text-sm font-semibold">
                                        App Store
                                    </span>
                                </div>
                            ) : (
                                <div className="backdrop-blur-md flex items-center justify-center w-36 px-2 py-1.5 rounded-xl mx-2 border-neutral-600 border-2 border-opacity-20"
                                >
                                    <FaGithub className="w-6 h-6 mr-2" />
                                    <span className="text-sm font-semibold">
                                        GitHub
                                    </span>
                                </div>
                            )
                        }
                    </div>
                    <img
                        src={app.bannerImage}
                        alt={app.name + ' banner'}
                    />

                </div>

            </div>
            <div
                className='m-4 text-left'
            >

                <h2 className={`text-2xl font-semibold w-full`}>
                    {app.name}
                </h2>


                <p className={`opacity-50`}>
                    {app.description}
                </p>
            </div>


        </a>
    )

}

