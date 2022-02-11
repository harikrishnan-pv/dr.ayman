import Gallery from "../components/gallery";

const Home = () => {
    return (
        <div className="overflow-clip">
            <div className="w-full banner h-screen fixed -z-10">
            </div>
            <div className="w-full min-h-screen absolute">
                <div className="grid max-w-4xl mx-auto mt-40 h-max content-center items-center justify-items-center align-middle grid-cols-5">
                    <div className="col-span-3 text-white">
                        <h1 className="text-4xl my-5 font-serif">
                            Dr. Ayman Mokdad
                        </h1>
                        <hr className="border-amber-600 border-t-2 my-5" />
                        <p className="font-bold mt-10">
                            Orthodontic and Maxillofacial
                        </p>
                        <ul className="list-disc ml-5 mt-2">
                            <li>
                                Board Certified Plastic Surgeon
                            </li>
                            <li>
                                Decades of Experience and Over 10,000 Procedures Performed
                            </li>
                            <li>
                                Educated and Trained at Rice University and Harvard Medical School
                            </li>
                        </ul>
                        <div className="grid p-5 md:grid-cols-4 mt-5 pl-0 grid-cols-2 invert gap-3">
                            <img src="/img/1.png" alt="" className="h-16" />
                            <img src="/img/2.png" alt="" className="h-16" />
                            <img src="/img/3.png" alt="" className="h-16" />
                            <img src="/img/4.png" alt="" className="h-16 " />
                        </div>
                        <button type="button" className="inline-block px-6 py-2.5 bg-yellow-600 text-black w-full font-medium text-xs leading-tight shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 uppercase ease-in-out">Visit Before and after gallery</button>
                    </div>
                </div>
            </div>
            <section className="w-full h-screen">

            </section>
            <section className="w-full">
                <div className="w-full bg-amber-400">
                    <div className="container mx-auto flex justify-center flex-col h-96 ">
                        <div className="text-4xl text-center px-20  pt-10 italic font-serif">
                            “Your adornment must not be merely external–braiding the hair and wearing gold jewelry, or putting on garments, but let it be the hidden person of the heart..”
                        </div>
                        <div className="text-lg text-center p-10">
                            This statement was made by the Apostle Peter nearly 2000 years ago, but it remains just as true today as it was then.

                            On this website you will find information about achieving external beauty, but true beauty arises from within. May inner beauty be the greater pursuit for each of you.
                        </div>
                    </div>
                </div>
                <div className="w-full md:grid-cols-2 grid-cols-1 grid h-screen bg-white">
                    <div className="w-full banner2 h-full">
                    </div>
                    <div className="px-16 w-full flex flex-col items-center justify-center h-full">
                        <h1 className="text-4xl text mb-10 font-serif  italic">
                            Enhance Your Beauty <br /> Instead of Concealing It
                        </h1>
                        <p className="w-96 text-gray-600 leading-loose text-justify">
                            The plastic surgery practice of Dr. George Sanders prioritizes outstanding results and care that is personal, private, and supportive. Our San Fernando Valley patients benefit from the latest advances in surgical and non-surgical treatment
                            <br />
                            <br />
                            Offering procedures for the face, body, and breasts, Dr. Sanders works collaboratively with patients to achieve their aesthetic goals: refining and rejuvenating their features, resolving their trouble-spots, and helping them become the best possible version of themselves.

                        </p>
                        <button type="button" className="inline-block px-6 py-2.5 bg-transparent text-yellow-500 w-96 mt-5 font-medium text-xs leading-tight  border-4 border-yellow-500 hover:bg-yellow-500 hover:text-white hover:border-yellow-500  hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 uppercase ease-in-out">Visit Before and after gallery</button>
                    </div>
                </div>
            </section>
            <Gallery />
            <div className="w-full md:grid-cols-2 grid-cols-1 grid  bg-white">
                <div className="w-full banner3 h-full">
                </div>
                <div className="p-16 w-full flex flex-col items-center justify-center h-full">
                    <h1 className="text-5xl text mb-10 font-serif  italic">
                        Meet Dr. George
                        <br />
                        Sanders
                    </h1>
                    <p className="w-96 text-gray-600 leading-loose text-justify">
                        The plastic surgery practice of Dr. George Sanders prioritizes outstanding results and care that is personal, private, and supportive. Our San Fernando Valley patients benefit from the latest advances in surgical and non-surgical treatment
                        <br />
                        <br />
                        Offering procedures for the face, body, and breasts, Dr. Sanders works collaboratively with patients to achieve their aesthetic goals: refining and rejuvenating their features, resolving their trouble-spots, and helping them become the best possible version of themselves.

                    </p>
                    <button type="button" className="inline-block px-6 py-2.5 bg-transparent text-yellow-500 w-96 mt-5 font-medium text-xs leading-tight  border-4 border-yellow-500 hover:bg-yellow-500 hover:text-white hover:border-yellow-500  hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 uppercase ease-in-out">Visit Before and after gallery</button>
                </div>
            </div>
            <Gallery />
            <div className="w-full md:grid-cols-2 grid-cols-1 grid  bg-white">
                <div className="w-full banner4 h-full">
                </div>
                <div className="p-16 w-full min-h-screen flex flex-col items-center justify-center h-full">
                    <h1 className="text-5xl text mb-10 font-serif  italic">
                        Sign up for our
                        <br />
                        Newsletter
                    </h1>
                    <p className="text-gray-600 w-96 text-justify pb-20">
                        Don’t miss out. Whether you’re deciding between aesthetic options in the San Fernando Valley, interested in treatment that looks better and heals faster, or want to be the first to know about advances in cosmetic care, subscribe to our practice newsletter.
                    </p>
                    <form action="">
                        <div className="my-10 uppercase sm:mt-0">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="mt-5 md:mt-0 md:col-span-3">
                                    <form action="#" method="POST">
                                        <div className="shadow overflow-hidden ">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                            First name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300  -md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                            Last name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300  -md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-4">
                                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                            Email address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="email-address"
                                                            id="email-address"
                                                            autoComplete="email"
                                                            className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300  -md"
                                                        />
                                                    </div>


                                                </div>
                                            </div>
                                            <button type="button" className="inline-block px-6 py-2.5 bg-transparent text-yellow-500 mt-5 font-medium text-xs leading-tight  border-4 border-yellow-500 hover:bg-yellow-500 hover:text-white hover:border-yellow-500  hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition w-full duration-150 uppercase ease-in-out">Submit</button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;