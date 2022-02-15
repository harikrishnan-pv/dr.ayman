import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination } from "swiper";



export default function Home() {

    return (
        <div >
            <nav className="w-full shadow flex p-5 justify-around">
                <a href="/#">
                    <img className="w-10" src="img/logo.jpg" alt="" />
                </a>
                <div className="flex items-center">
                    <svg className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white mx-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <img className="w-7 h-7" src="img/whatsapp.png" alt="" />
                    <svg className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white mx-4 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                </div>
            </nav>
            <div className="banner -z-10 absolute w-full h-full">
            </div>
            <div className="h-screen">
                <div className="max-w-6xl mx-auto justify-items-center content-center h-4/6  grid grid-cols-2 lg:grid-cols-4">
                    <div className="col-span-3 hidden lg:block"></div>
                    <div className="bg-white p-2 pt-5 mt-10 text-center">
                        <p>Get a Diagnosis in minutes</p>
                        <div class="block p-6 rounded-lg  bg-white max-w-md">
                            <form>
                                <div class="form-group mb-6">
                                    <input type="text" class="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none" id="exampleInput7"
                                        placeholder="Name" />
                                </div>
                                <div class="form-group mb-6">
                                    <input type="email" class="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none" id="exampleInput8"
                                        placeholder="Email address" />
                                </div>
                                <div class="form-group mb-6">
                                    <textarea
                                        class="
                                            form-control
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                                        id="exampleFormControlTextarea13"
                                        rows="3"
                                        placeholder="Message"
                                    ></textarea>
                                </div>

                                <button type="submit" class="
                                    w-full
                                    px-6
                                    py-2.5
                                    bg-cyan-600
                                    text-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    shadow-md
                                    hover:bg-cyan-700 hover:shadow-lg
                                    focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-cyan-800 active:shadow-lg
                                    transition
                                    duration-150
                                    ease-in-out">
                                    Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="absolute -z-10 w-full">
                    <div className="grid  h-3/6 max-w-5xl mx-auto grid-flow-col grid-rows-2">
                        <div>

                        </div>
                        <div className="bg-cyan-600 flex flex-col justify-center p-10 text-right text-white">
                            <p className="text-3xl font-bold">
                                Dr. Ayman Mokdad
                            </p>
                            <p className="text-2xl">
                                Clinic White Jah Dental Center
                            </p>
                            <p className="text-xl">
                                Orthodontic and Maxillofacial
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl z-10 p-10 mx-auto">
                    <img src="/img/royal.png" alt="" />
                </div>
                <div className="mt-10 font-thin  border-t-white max-w-5xl mx-auto bg-cyan-600 grid grid-cols-3 text-white">
                    <div className="py-5">
                        <div className="p-3 flex border-r-white border-r-2 flex-col items-center w-full">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                            <p className="text-xl py-5   font-bold">
                                Direct Booking
                            </p>
                            <p className="text-justify p-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel praesentium voluptatibus enim nostrum accusantium eaque sit iste itaque dolorum aperiam, non ipsum porro repellendus adipisci debitis corrupti voluptatem animi! Aut soluta at fuga in impedit quod officia tenetur nam exercitationem, similique ut sint voluptate maxime, mollitia, consectetur cumque. Omnis?
                            </p>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="p-3 flex flex-col items-center border-r-white border-r-2 w-full">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                            <p className="text-xl  py-5 font-bold">
                                Direct Booking
                            </p>
                            <p className="text-justify p-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel praesentium voluptatibus enim nostrum accusantium eaque sit iste itaque dolorum aperiam, non ipsum porro repellendus adipisci debitis corrupti voluptatem animi! Aut soluta at fuga in impedit quod officia tenetur nam exercitationem, similique ut sint voluptate maxime, mollitia, consectetur cumque. Omnis?
                            </p>
                        </div>
                    </div>
                    <div className="p-5 flex flex-col items-center w-full">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                        <p className="text-xl  py-5 font-bold">
                            Direct Booking
                        </p>
                        <p className="text-justify p-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel praesentium voluptatibus enim nostrum accusantium eaque sit iste itaque dolorum aperiam, non ipsum porro repellendus adipisci debitis corrupti voluptatem animi! Aut soluta at fuga in impedit quod officia tenetur nam exercitationem, similique ut sint voluptate maxime, mollitia, consectetur cumque. Omnis?
                        </p>
                    </div>
                </div>
                <div className="mt-10 container text-white mx-auto overflow-hidden w-full">
                    <Swiper autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]} className="mySwiper bg-cyan-600 mx-auto max-w-5xl">
                        <SwiperSlide>
                            <div className="grid grid-cols-2">
                                <div className="banner h-96"></div>
                                <div className="p-10 flex flex-col justify-center">
                                    <h1 className="text-3xl mb-5 font-bold">
                                        Dr. Ayman Mokdad
                                    </h1>
                                    <ul className="list-disc">
                                        <li>
                                            2017

                                            Certificate presented to Invisalign technology for transparent orthodontics - Riyadh

                                        </li>
                                        <li>
                                            2016

                                            Certificate presented by Harmony Smile Technology, Roncheston, USA

                                        </li>
                                        <li>
                                            2011

                                            Master's degree in Orthodontics and Maxillofacial, Damascus University

                                        </li>
                                        <li>
                                            2008

                                            Postgraduate Diploma, Orthodontics and Maxillofacial, Damascus University

                                        </li>
                                        <li>
                                            2005

                                            Bachelor's degree in Dentistry and Surgery, Damascus University

                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-2">
                                <div className="banner h-96"></div>
                                <div className="p-10 flex flex-col justify-center">
                                    <h1 className="text-3xl mb-5 font-bold">
                                        Dr. Ayman Mokdad
                                    </h1>
                                    <ul className="list-disc">
                                        <li>
                                            2017

                                            Certificate presented to Invisalign technology for transparent orthodontics - Riyadh

                                        </li>
                                        <li>
                                            2016

                                            Certificate presented by Harmony Smile Technology, Roncheston, USA

                                        </li>
                                        <li>
                                            2011

                                            Master's degree in Orthodontics and Maxillofacial, Damascus University

                                        </li>
                                        <li>
                                            2008

                                            Postgraduate Diploma, Orthodontics and Maxillofacial, Damascus University

                                        </li>
                                        <li>
                                            2005

                                            Bachelor's degree in Dentistry and Surgery, Damascus University

                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className="h-screen text-6xl font-bold text-center">
                    <div className="pt-40 pb-20">
                        Visitors Opinion
                    </div>
                    <div className="grid grid-cols-2 max-w-5xl mx-auto">
                        <div className="h-72 p-5 bg-cyan-600 "><iframe className="w-full h-full" src="https://www.youtube.com/embed/B2rJ603fTDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div className="h-72 bg-cyan-600 p-5 ">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/B2rJ603fTDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="pt-20 mt-10 text-5xl bg-yellow-600 text-white pb-20">
                        <div className="font-mono">
                            Monthly Cases
                        </div>
                        <div className="grid mt-10 h-full grid-cols-5">
                            <div className="p-3">
                                25
                                <p className="text-lg pt-5 font-normal">
                                    E-Max Formulas
                                </p>
                            </div>
                            <div className="p-3">
                                35
                                <p className="text-lg pt-5 font-normal">
                                    Metal Transplant
                                </p>
                            </div>
                            <div className="p-3">
                                100
                                <p className="text-lg pt-5 font-normal">
                                    Laser Whitening
                                </p>
                            </div>
                            <div className="p-3">
                                55
                                <p className="text-lg pt-5 font-normal">
                                    Hollywood Smile
                                </p>
                            </div>
                            <div className="p-3">
                                60
                                <p className="text-lg pt-5 font-normal">
                                    Tooth Implant
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-3/6"></div>
                <div className="w-full">
                    <div className="container max-w-6xl mx-auto shadow-xl m-5 p-10 text-5xl text-center bg-white">
                        Before and After Pictures
                        <div className="grid mt-7 grid-cols-4">
                            <img src="img/result1.jpg" alt="" />
                            <img src="img/result2.jpg" alt="" />
                            <img src="img/result3.jpg" alt="" />
                            <img src="img/result4.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="container max-w-6xl mx-auto shadow-xl m-5 p-10 text-5xl text-center bg-white">
                        Dental Services
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="text-lg mt-7">
                            <SwiperSlide className="shadow-xl p-4">
                                
                                <div className="text-xl text-cyan-500 font-bold">
                                    Calendar with the usual metal brackets
                                </div>
                                <p className="text-justify pt-4">
                                    What is unusual in its worship is our use of beautiful brackets in shape and smooth appearance to reduce disturbance to a minimum and provided by the finest international companies


                                </p>
                            </SwiperSlide>
                            <SwiperSlide className="shadow-xl p-4">
                                
                                <div className="text-xl text-cyan-500 font-bold">
                                    Calendar with the usual metal brackets
                                </div>
                                <p className="text-justify pt-4">
                                    What is unusual in its worship is our use of beautiful brackets in shape and smooth appearance to reduce disturbance to a minimum and provided by the finest international companies


                                </p>
                            </SwiperSlide>
                            <SwiperSlide className="shadow-xl p-4">
                                
                                <div className="text-xl text-cyan-500 font-bold">
                                    Calendar with the usual metal brackets
                                </div>
                                <p className="text-justify pt-4">
                                    What is unusual in its worship is our use of beautiful brackets in shape and smooth appearance to reduce disturbance to a minimum and provided by the finest international companies


                                </p>
                            </SwiperSlide>
                            <SwiperSlide className="shadow-xl p-4">
                                
                                <div className="text-xl text-cyan-500 font-bold">
                                    Calendar with the usual metal brackets
                                </div>
                                <p className="text-justify pt-4">
                                    What is unusual in its worship is our use of beautiful brackets in shape and smooth appearance to reduce disturbance to a minimum and provided by the finest international companies


                                </p>
                            </SwiperSlide>
                            <SwiperSlide className="shadow-xl p-4">
                                
                                <div className="text-xl text-cyan-500 font-bold">
                                    Calendar with the usual metal brackets
                                </div>
                                <p className="text-justify pt-4">
                                    What is unusual in its worship is our use of beautiful brackets in shape and smooth appearance to reduce disturbance to a minimum and provided by the finest international companies


                                </p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
