import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";



export default function Home() {

    return (
        <div >
            <nav className="w-full shadow flex p-5 justify-around">
                <a href="/#">
                    <img className="w-20" src="img/logo.jpg" alt="" />
                </a>
                <div className="flex items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className="flex items-center">
                            <svg className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white mx-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            <img className="w-10 h-10" src="img/whatsapp.png" alt="" />
                            <svg className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white mx-4 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                        </div>
                        <div className="text-sm pt-3 sm:pt-0">
                            <Link className="px-5 p-2 hover:shadow-lg transition ease-in-out duration-500 font-bold text-cyan-500" to="/">
                                عربي

                            </Link>
                            <Link to="/en" className="px-5 p-2 hover:shadow-lg transition ease-in-out duration-500">
                                English
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="banner -z-10 hidden md:block absolute w-full h-full">
            </div>
            <div className="bannerm md:hidden -z-10 absolute w-full h-5/6">
            </div>
            <div className="h-screen">
                <div className="max-w-6xl mx-auto justify-items-center content-center h-4/6  grid grid-cols-2 lg:grid-cols-4">
                    <div className="col-span-3 hidden lg:block"></div>
                    <div className="bg-white p-2 hidden md:block pt-5 mt-10 text-center">
                        <p>Get a Diagnosis in minutes</p>
                        <div class="block p-6 rounded-lg  bg-white max-w-md">
                            <form action="https://formsubmit.co/babu.ali@intelltech.in" method="POST">
                                <div class="form-group mb-6">
                                    <input type="hidden" name="_cc" value="alialsabr@gmail.com" />


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
                                        focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                                        name="name"
                                        id="exampleInput7"
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
                                        name="email"
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
                                        name="message"
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
                                    Free Medical Advice</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="absolute -z-10 w-full">
                    <div className="grid  h-3/6 max-w-5xl mx-auto grid-flow-col grid-rows-2">
                        <div>

                        </div>
                        <div className="bg-cyan-600 hidden md:flex flex-col justify-center p-10 py-14 text-right text-white">
                            <p className="text-3xl font-bold">
                                Dr. Ayman Almakdad
                            </p>
                            <p className="text-xl">
                                Orthodontic and maxillofacial specialist
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl flex mt-10 justify-center md:block z-10 p-10 pb-7 mx-auto">
                    <img src="/img/royal.png" alt="" />
                </div>
                <div className="bg-white p-2  md:hidden  text-center">
                    <p className="text-3xl font-bold">
                        Dr. Ayman Almakdad
                    </p>
                    <p className="text-xl mt-3 mb-7">
                        Orthodontic and maxillofacial specialist
                    </p>
                    <p>Get a Diagnosis in minutes</p>
                    <div class="block p-6 rounded-lg mx-auto bg-white max-w-md">
                        <form action="https://formsubmit.co/babu.ali@intelltech.in" method="POST">
                            <div class="form-group mb-6">
                                <input type="hidden" name="_cc" value="alialsabr@gmail.com" />

                                <input name="name" type="text" class="form-control block
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
                                <input name="email" type="email" class="form-control block
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
                                    name="message"
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
                                Free Medical Advice</button>
                        </form>
                    </div>
                </div>
                <div className="md:my-10 font-thin hidden md:grid border-t-white  max-w-5xl mx-auto bg-cyan-600  grid-cols-3 text-white">

                </div>
                <div className="py-10 bg-slate-100 mt-20  container text-white mx-auto overflow-hidden w-full">
                    <Swiper autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]} className="mySwiper bg-cyan-600 mx-auto max-w-5xl">
                        <SwiperSlide>
                            <div className="grid content-center md:grid-cols-2">
                                <div className="banners"></div>
                                <div className="p-10 flex flex-col justify-center">
                                    <h1 className="text-3xl mb-5 font-bold">
                                        Certification
                                    </h1>
                                    <ul className="list-disc py-16 text-sm lg:text-base">
                                        <li>
                                            Presenter Certificate for Invisalign Technology, Riyadh 2017
                                        </li>
                                        <li>
                                            Certificate presented by Harmony Smile Technology, Internal Linguistic Calendar, Rochester, USA 2016
                                        </li>
                                        <li>
                                            Certificate of Advanced Stage in Implantology, Riyadh College of Dentistry, Riyadh 2012
                                        </li>
                                        <li>
                                            Basic Stage Certificate in Implantology, Riyadh College of Dentistry, Riyadh 2012
                                        </li>
                                        <li>
                                            Master's degree in Orthodontics and Maxillofacial, Damascus University 2011
                                        </li>
                                        <li>
                                            Postgraduate Diploma, Orthodontics and Maxillofacial, Damascus University 2008
                                        </li>
                                        <li>
                                            Bachelor of Dentistry and Surgery, Damascus University 2005
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid md:grid-cols-2">
                                <div className="banners">

                                </div>

                                <div className="p-10 flex flex-col justify-center">
                                    <h1 className="text-3xl mb-5 font-bold">
                                        Qualification
                                    </h1>
                                    <ul className="list-disc text-sm py-16 lg:text-base ">
                                        <li>
                                            Classified as a deputy in orthodontics by the Saudi Commission for Health Specialties
                                        </li>
                                        <li>
                                            Holder of the Dean's chair at Damascus University 2007
                                        </li>
                                        <li>
                                            Second place holder in the batch in Bachelor of Dentistry, Damascus University 2005
                                        </li>
                                        <li>
                                            Treating a very large number of orthodontic cases of various types
                                        </li>
                                        <li>
                                            Distinguished in re-treatment of previously poorly treated orthodontic cases or recurring after stabilization
                                        </li>
                                        <li>
                                            Distinguished in treating cases of congenital anomalies from an orthodontic side, such as clefts of the lip and the dome of the palate
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                {/* <div className=" lg:text-6xl text-3xl lg:pb-20 font-bold text-center">
                    <div className="lg:py-40 py-10">
                        Visitors Opinion
                    </div>
                    <div className="grid md:grid-cols-2 max-w-5xl mx-auto">
                        <div className="h-72 p-5 bg-cyan-600 "><iframe className="w-full h-full" src="https://www.youtube.com/embed/B2rJ603fTDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div className="h-72 bg-cyan-600 p-5 ">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/B2rJ603fTDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div> */}
                <div className="pt-20 text-center mt-10 text-3xl lg:text-5xl bg-yellow-600 text-white pb-20">
                    <div className="font-mono">
                        Monthly Cases
                    </div>
                    <div className="grid mt-10 h-full md:grid-cols-3 lg:grid-cols-5">
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
                {/* <div className="w-full bg-slate-100 py-10">
                    <div className="container max-w-6xl mx-auto shadow-xl  p-10 lg:text-5xl text-3xl text-center bg-white">
                        Before and After Pictures
                        <div className="grid mt-7 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            <img src="img/result1.jpg" alt="" />
                            <img src="img/result2.jpg" alt="" />
                            <img src="img/result3.jpg" alt="" />
                            <img src="img/result4.jpg" alt="" />
                        </div>
                    </div>
                </div> */}
                <div className="w-full  py-10">
                    <div className="container mx-auto w-max shadow-xl m-5 p-10 lg:text-5xl text-3xl  text-center ">
                        DENTAL SERVICES
                        <div className="grid max-w-7xl mt-10 px-10 mx-auto lg:grid-cols-3 gap-6">
                            <div className="md:h-96 md:w-96 h-60 w-60  s1">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s2">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s3">

                            </div>

                            <div className="md:h-96 md:w-96 h-60 w-60  s4">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s5">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s6">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s7">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s8">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s9">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 py-10">
                    <div className="grid max-w-6xl mx-auto">

                        <div className="px-10 flex flex-col justify-center items-end">
                            <div className="text-2xl text-right">
                                Call us
                            </div>
                            <div className="flex items-center mt-5 justify-end">
                                <svg className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white mx-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <img className="w-10 h-10" src="img/whatsapp.png" alt="" />
                                <svg className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white ml-4 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                            </div>
                            <div className="text-right mt-5">
                                Central Riyadh
                                <br />
                                Eastern Ring Road
                                <br /> between Exit 10 and 11
                                <br /> Al-Quds District
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
