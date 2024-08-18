import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import Link from 'next/link';


const VideoCard = () => {
    return (
        <>
            <div>
                <Link href={'/videos'} >
                    <div className=" overflow-hidden w-80" key={''}>
                        <div className="relative ">
                            <img
                                className=" rounded-xl"
                                src={`https://img.youtube.com/vi/BbNJNgav3Lk/maxresdefault.jpg`}
                                alt="Thumbnail"
                            />
                            <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
                                00:00
                            </span>
                        </div>

                        <div className="py-2 flex flex-row items-start 00">
                            <Avatar name='Sanjoy' src='logo.png' />
                            <div className='flex flex-col ms-2'>
                                <h3 className="text-start text-gray-900 text-md mb-2 font-semibold ">
                                    Video Title YouTube Profile & Banner Downloader
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Channel Name
                                </p>
                                <div className='flex items-center'>
                                    <p className="text-gray-600 text-sm truncate">
                                        {'1.6M views'}
                                    </p>

                                    <p className="text-gray-600 text-sm">
                                        {`1 year ago`}
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default VideoCard