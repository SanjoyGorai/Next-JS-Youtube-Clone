'use client'
import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone, FaUserCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import Link from 'next/link';
import { BsFillMicFill } from "react-icons/bs";
import { BiBell, BiSearch, BiSolidCameraPlus } from "react-icons/bi";
import { BiVideoPlus } from "react-icons/bi";
import Avatar from 'react-avatar';

export default function Navbar() {
    return (
        <div className={`p-1 flex justify-between text-black h-14 'bg-white'} `}>
            <div className='flex items-center ms-3'>
                <IoMenuSharp className='cursor-pointer size-10 p-2 mr-3 hover:bg-gray-300 hover:rounded-full hover:p-2'
                />
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png'}
                    alt="" className='w-30 h-5 cursor-pointer ms-1 select-none' />
            </div>
            <div className='flex items-center'>
                <input

                    type="text" placeholder='Search'
                    className={`  text-black border border-gray-300 select-none 
                 focus:border-sky-600 w-96 outline-none h-10 p-2 ps-4 
                 rounded-l-full lg:w-[32rem]`}
                />
                <button className={`  `}>
                    <BiSearch className={`  w-16 bg-white text-gray-500 border-gray-300 border-r border-y rounded-r-full p-2 size-10 hover:bg-gray-200 `} />
                </button>
                <BsFillMicFill className='ms-5 p-3 size-10 bg-gray-300 rounded-full
                 hover:bg-gray-300 cursor-pointer' />
            </div>

            <div className='grid grid-cols-4 items-center space-x-2 me-0'>
                {/* <CustomizedThemeSwitch /> */}
                <BiVideoPlus className='size-10 p-2 cursor-pointer rounded-full hover:bg-gray-300' />
                <BiBell className='size-10 p-2 rounded-full cursor-pointer hover:bg-gray-300' />
                <Avatar src={'user'} size="35" round={true} className=' cursor-pointer ml-3' />
            </div>
        </div >
    );
}
