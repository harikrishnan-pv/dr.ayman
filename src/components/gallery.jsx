import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/gal1.jpg'
import img2 from '../img/gal2.jpg'


export default function Gallery() {
    const [img, setImg] = useState({

        "id": 1,
        "img": img1,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio totam qui exercitationem, asperiores dolor aspernatur non officiis nostrum error, fugiat veritatis ab recusandae assumenda dignissimos corrupti voluptatem saepe dolorem alias quis sed cum harum odio quasi molestias. Aliquid placeat molestiae laboriosam quibusdam eos nisi corporis quidem recusandae totam officia quam dolores nam accusantium obcaecati labore cupiditate quo distinctio, necessitatibus asperiores dolorem nesciunt reiciendis illo. Nihil laudantium numquam, quasi inventore fugit ducimus porro totam. Harum quae, enim accusantium nam quos ullam veritatis reiciendis earum culpa nobis quibusdam mollitia nisi perferendis voluptates consequuntur commodi, magni molestiae. Perspiciatis dolorum vero aliquid adipisci magnam.",
        "title": "some title",
        "cat1": "1 category id1",
        "cat2": "2 category id1",
        "cat3": "3 category id1",
        "cat4": "4 category id1"


    })
    return <div className="w-full bg-black grid lg:grid-cols-3">
        <div className="col-span-2 " style={{ background: `url(${img.img})`, backgroundSize: `cover` }}>
        <div className="h-96"></div>
            <div className="h-20"></div>
        </div>
        <div className="flex items-end">
            <div className="bg-gray-300 w-full h-2/6 flex items-center justify-center text-3xl text-center font-serif p-10">
                View Gallery
            </div>
        </div>
        <div className="col-span-2  bg-white">
            <div className="grid grid-cols-2 px-20 pt-5 md:grid-cols-4">
                <button
                    onClick={() => {
                        setImg({
                            "id": 1,
                            "img": img1,
                            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio totam qui exercitationem, asperiores dolor aspernatur non officiis nostrum error, fugiat veritatis ab recusandae assumenda dignissimos corrupti voluptatem saepe dolorem alias quis sed cum harum odio quasi molestias. Aliquid placeat molestiae laboriosam quibusdam eos nisi corporis quidem recusandae totam officia quam dolores nam accusantium obcaecati labore cupiditate quo distinctio, necessitatibus asperiores dolorem nesciunt reiciendis illo. Nihil laudantium numquam, quasi inventore fugit ducimus porro totam. Harum quae, enim accusantium nam quos ullam veritatis reiciendis earum culpa nobis quibusdam mollitia nisi perferendis voluptates consequuntur commodi, magni molestiae. Perspiciatis dolorum vero aliquid adipisci magnam.",
                            "title": "some title",
                            "cat1": "1 category id1",
                            "cat2": "2 category id1",
                            "cat3": "3 category id1",
                            "cat4": "4 category id1"

                        })
                    }}
                    className="rounded-full h-20 w-20 flex hover:-translate-y-4 transition active:-translate-y-4 ease-in-out items-center justify-center shadow-md font-serif">
                    Breast
                </button >
                <button onClick={() => {
                    setImg({
                        "id": 2,
                        "img": img2,
                        "desc": "Lorem 22 ipsum dolor, sit amet consectetur adipisicing elit. Optio totam qui exercitationem, asperiores dolor aspernatur non officiis nostrum error, fugiat veritatis ab recusandae assumenda dignissimos corrupti voluptatem saepe dolorem alias quis sed cum harum odio quasi molestias. Aliquid placeat molestiae laboriosam quibusdam eos nisi corporis quidem recusandae totam officia quam dolores nam accusantium obcaecati labore cupiditate quo distinctio, necessitatibus asperiores dolorem nesciunt reiciendis illo. Nihil laudantium numquam, quasi inventore fugit ducimus porro totam. Harum quae, enim accusantium nam quos ullam veritatis reiciendis earum culpa nobis quibusdam mollitia nisi perferendis voluptates consequuntur commodi, magni molestiae. Perspiciatis dolorum vero aliquid adipisci magnam.",
                        "title": "some other title",
                        "cat1": "1 category id2",
                        "cat2": "2 category id2",
                        "cat3": "3 category id2",
                        "cat4": "4 category id2"
                    })
                }}
                    className="rounded-full h-20 w-20 flex hover:-translate-y-4 transition active:-translate-y-4 ease-in-out items-center justify-center shadow-md font-serif">
                    Body
                </button>
                <button
                    onClick={() => {
                        setImg({
                            "id": 1,
                            "img": img1,
                            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio totam qui exercitationem, asperiores dolor aspernatur non officiis nostrum error, fugiat veritatis ab recusandae assumenda dignissimos corrupti voluptatem saepe dolorem alias quis sed cum harum odio quasi molestias. Aliquid placeat molestiae laboriosam quibusdam eos nisi corporis quidem recusandae totam officia quam dolores nam accusantium obcaecati labore cupiditate quo distinctio, necessitatibus asperiores dolorem nesciunt reiciendis illo. Nihil laudantium numquam, quasi inventore fugit ducimus porro totam. Harum quae, enim accusantium nam quos ullam veritatis reiciendis earum culpa nobis quibusdam mollitia nisi perferendis voluptates consequuntur commodi, magni molestiae. Perspiciatis dolorum vero aliquid adipisci magnam.",
                            "title": "some title",
                            "cat1": "1 category id1",
                            "cat2": "2 category id1",
                            "cat3": "3 category id1",
                            "cat4": "4 category id1"
                        })
                    }}
                    className="rounded-full h-20 w-20 flex hover:-translate-y-4 transition active:-translate-y-4 ease-in-out items-center justify-center shadow-md font-serif">
                    Face
                </button>
                <button
                    onClick={() => {
                        setImg({
                            "id": 2,
                            "img": img2,
                            "desc": "Lorem 22 ipsum dolor, sit amet consectetur adipisicing elit. Optio totam qui exercitationem, asperiores dolor aspernatur non officiis nostrum error, fugiat veritatis ab recusandae assumenda dignissimos corrupti voluptatem saepe dolorem alias quis sed cum harum odio quasi molestias. Aliquid placeat molestiae laboriosam quibusdam eos nisi corporis quidem recusandae totam officia quam dolores nam accusantium obcaecati labore cupiditate quo distinctio, necessitatibus asperiores dolorem nesciunt reiciendis illo. Nihil laudantium numquam, quasi inventore fugit ducimus porro totam. Harum quae, enim accusantium nam quos ullam veritatis reiciendis earum culpa nobis quibusdam mollitia nisi perferendis voluptates consequuntur commodi, magni molestiae. Perspiciatis dolorum vero aliquid adipisci magnam.",
                            "title": "some other title",
                            "cat1": "1 category id2",
                            "cat2": "2 category id2",
                            "cat3": "3 category id2",
                            "cat4": "4 category id2"
                        })
                    }}
                    className="rounded-full h-20 w-20 flex hover:-translate-y-4 transition active:-translate-y-4 ease-in-out items-center justify-center shadow-md font-serif">
                    Non Surgical
                </button>
            </div>
            <div className="p-16 pt-5 w-full flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl text mb-10 uppercase font-serif  italic">
                    {img.title}
                </h1>
                <p className=" text-gray-600 mb-10 leading-loose text-justify">
                    {img.desc}
                </p>
            </div>
        </div>
        <div className="w-full text-center flex flex-col py-20">
            <Link to="" className="text-lg hover:text-amber-500 hover:translate-x-3  duration-500 ease-in-out  text-white text mb-10 uppercase ">
                {img.cat1}
            </Link>
            <Link to="" className="text-lg hover:text-amber-500 hover:translate-x-3  duration-500 ease-in-out  text-white text mb-10 uppercase ">
                {img.cat2}
            </Link>
            <Link to="" className="text-lg hover:text-amber-500 hover:translate-x-3  duration-500 ease-in-out  text-white text mb-10 uppercase ">
                {img.cat3}
            </Link>
            <Link to="" className="text-lg hover:text-amber-500 hover:translate-x-3  duration-500 ease-in-out  text-white text mb-10 uppercase ">
                {img.cat4}
            </Link>

        </div>
    </div>;
}
