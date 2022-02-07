const Home = () => {
    return (
        <div>
            <div className="w-screen banner h-screen fixed -z-10">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;