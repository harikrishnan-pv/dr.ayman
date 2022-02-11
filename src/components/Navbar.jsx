const Navbar = () => {
    return (
        <div className="fixed bg-black uppercase bg-opacity-60 w-screen z-20 h-20 ">
            <div className=" flex  justify-around z-10 max-w-5xl mx-auto h-full items-center">
                <h1 className="text-5xl text-white font-serif ">
                    AM
                </h1>
                <div className="gap-2 grid grid-flow-col">
                    <div className="group inline-block duration-500 ease-in-out transition relative">
                        <button
                            className=" text-white group-hover:text-amber-500  duration-500 ease-in-out transition font-semibold py-2 px-4   inline-flex items-center"
                        >
                            <span className="mr-1">ABOUT</span>
                            <svg
                                className="fill-current group-hover:rotate-0 group-hover:text-amber-500 text-white m-auto duration-500 ease-in-out transition -rotate-90 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                        </button>
                        <ul className="absolute w-80 text-left invisible opacity-0 bg-gray-900 bg-opacity-75  py-10  text-white  duration-500 ease-in-out transition  group-hover:opacity-100 group-hover:visible  ">
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    Our Practice
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    Meet Dr. Ayman
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    Why board certified?
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                   Meet the staff
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                   In the media
                                </a >
                            </li>
                            
                        </ul>
                    </div>
                    <div className="group inline-block duration-500 ease-in-out transition relative">
                        <button
                            className=" text-white group-hover:text-amber-500  duration-500 ease-in-out transition font-semibold py-2 px-4   inline-flex items-center"
                        >
                            <span className="mr-1">PROCEDURES</span>
                            <svg
                                className="fill-current group-hover:rotate-0 group-hover:text-amber-500 text-white m-auto duration-500 ease-in-out transition -rotate-90 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                        </button>
                        <ul className="absolute w-80 text-left invisible opacity-0 bg-gray-900 bg-opacity-75  py-10  text-white  duration-500 ease-in-out transition  group-hover:opacity-100 group-hover:visible ">
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    procedures overview
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    breast surgery
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    body contouring
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                   facial surgery
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                   male plastic surgery
                                </a >
                            </li>
                            
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                 minimally invasive                                </a >
                            </li>
                        </ul>
                    </div>
                    <div className="group inline-block duration-500 ease-in-out transition relative">
                        <button
                            className=" text-white group-hover:text-amber-500  duration-500 ease-in-out transition font-semibold py-2 px-4   inline-flex items-center"
                        >
                            <span className="mr-1">PHOTO GALLERY</span>
                            <svg
                                className="fill-current group-hover:rotate-0 group-hover:text-amber-500 text-white m-auto duration-500 ease-in-out transition -rotate-90 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                        </button>
                        <ul className="absolute w-80 text-left invisible opacity-0 bg-gray-900 bg-opacity-75  py-10  text-white  duration-500 ease-in-out transition  group-hover:opacity-100 group-hover:visible ">
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    face procedures
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    breast procedures
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    eye procedures
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                   body procedures
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                   men's procedures
                                </a >
                            </li>
                            
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                 laser procedures
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                   see all
                                </a >
                            </li>
                        </ul>
                    </div>
                    <div className="group inline-block duration-500 ease-in-out transition relative">
                        <button
                            className=" text-white group-hover:text-amber-500  duration-500 ease-in-out transition font-semibold py-2 px-4   inline-flex items-center"
                        >
                            <span className="mr-1">REVIEWS</span>
                           
                        </button>
                        
                    </div>
                    <div className="group inline-block duration-500 ease-in-out transition relative">
                        <button
                            className=" text-white group-hover:text-amber-500  duration-500 ease-in-out transition font-semibold py-2 px-4   inline-flex items-center"
                        >
                            <span className="mr-1">PATIENT INFO</span>
                            <svg
                                className="fill-current group-hover:rotate-0 group-hover:text-amber-500 text-white m-auto duration-500 ease-in-out transition -rotate-90 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                        </button>
                        <ul className="absolute w-80 text-left invisible opacity-0 bg-gray-900 bg-opacity-75  py-10  text-white  duration-500 ease-in-out transition  group-hover:opacity-100 group-hover:visible ">
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    PATIENT FORMS
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    FINANCING
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    VIDEO LEARNING CENTER
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                   NEWSLETTER SIGN-UP
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-10 block whitespace-no-wrap"
                                    href="/#"
                                >
                                   BLOG
                                </a >
                            </li>
                            
                        </ul>
                    </div>
                    <div className="group inline-block duration-500 ease-in-out transition relative">
                        <button
                            className=" text-white group-hover:text-amber-500  duration-500 ease-in-out transition font-semibold py-2 px-4   inline-flex items-center"
                        >
                            <span className="mr-1">CONTACT</span>
                            <svg
                                className="fill-current group-hover:rotate-0 group-hover:text-amber-500 text-white m-auto duration-500 ease-in-out transition -rotate-90 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                        </button>
                        <ul className="absolute w-80 text-left invisible opacity-0 bg-gray-900 bg-opacity-75  py-10  text-white  duration-500 ease-in-out transition  group-hover:opacity-100 group-hover:visible ">
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-8 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    CONTACT
                                </a >
                            </li>
                            <li className="">
                                <a
                                    className="  font-semibold hover:text-amber-500 hover:translate-x-3 duration-500 ease-in-out py-2 px-8 block whitespace-no-wrap"
                                    href="/#"
                                >
                                    VIRTUAL CONSULTATION
                                </a >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;