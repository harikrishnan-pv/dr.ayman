import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";



export default function Arabic() {

    return (
        <div className="arabic">
            <nav className="w-full shadow flex p-5 justify-around">
                <a href="/#">
                    <img className="w-20" src="img/logo.jpg" alt="" />
                </a>
                <div className="flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className="grid grid-cols-5 md:grid-cols-5 gap-1 items-center  justify-end">
                            <a href="mailto:">
                                <svg className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                            </a>
                            <a href="https://wa.me/966536393232">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white  " viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                            </a>
                            <a href="tel:+966536393232">
                                <svg className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </a>
                            <a href="https://twitter.com/Dr_Ayman_mokdad">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white " viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>
                            <a href="/#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white " viewBox="0 0 16 16">
                                    <path d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4.66.66 0 0 1 .202.09c.118.104.102.26.259.488.079.118.18.22.296.3.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087 4.446 4.446 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047Zm-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082-1.519 0-2.045-.801-2.904-1.084-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a.93.93 0 0 1 .197.022c.396.086.78.285 1.002.338.027.007.054.01.082.011.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.35.35 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a.912.912 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.14.413 1.991 2.89 3.189.147.073.394.222-.041.464Z" />
                                </svg>
                            </a>
                        </div>
                        <div className="text-sm pt-3 flex items-center sm:pt-0">
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
                    <div className="bg-white p-2 hidden md:block pt-5 mt-10 text-center">
                        <p>احصل على تشخيص</p>
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
                                        placeholder="اسم" />
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
                                        placeholder="عنوان بريد الكتروني
                                        " />
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
                                        placeholder="رسالة"
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
                                    استشارة طبية مجانية
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-span-3 hidden lg:block"></div>
                </div>
                <div className="absolute -z-10 w-full">
                    <div className="grid  h-3/6 max-w-5xl mx-auto grid-flow-col grid-rows-2">
                        <div>

                        </div>
                        <div className="bg-cyan-600 hidden md:flex flex-col justify-center p-10 py-16 text-right text-white">
                            <p className="text-3xl font-bold">
                                الدكتور أيمن مقداد                            </p>
                            <p className="text-xl">
                                أخصائي تقويم الأسنان والفكين
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl flex justify-center md:block z-10 p-10 pb-7 mx-auto">
                    <img src="/img/royal.png" alt="" />
                </div>
                <div className="bg-white p-2  md:hidden  text-center">
                    <p className="text-3xl font-bold">
                        الدكتور أيمن مقداد
                    </p>
                    <p className="text-xl mt-3 mb-7">
                        أخصائي تقويم الأسنان والفكين

                    </p>
                    <p>احصل على تشخيص</p>
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
                                    placeholder="اسم" />
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
                                    placeholder="عنوان بريد الكتروني" />
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
                                    placeholder="رسالة"
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
                                استشارة طبية مجانية
                            </button>
                        </form>
                    </div>
                </div>
                <div className="md:my-10 font-thin hidden md:grid border-t-white  max-w-5xl mx-auto bg-cyan-600  grid-cols-3 text-white">

                </div>
                <div className="py-10 bg-slate-100 mt-20 container text-white mx-auto overflow-hidden w-full">
                    <Swiper autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]} className="mySwiper bg-cyan-600 mx-auto max-w-5xl">
                        <SwiperSlide>
                            <div className="grid md:grid-cols-2">
                                <div className="banners "></div>

                                <div className="p-10 flex flex-col justify-center">
                                    <h1 className="text-3xl mb-5 font-bold">
                                        الشهادات
                                    </h1>
                                    <ul className="list-disc py-16 text-sm lg:text-base">
                                        <li>
                                            شهادة مقدم لتقنية الانفزلاين للتقويم الشفاف invisalign  ، الرياض 2017
                                        </li>
                                        <li>
                                            شهادة مقدم لتقنية هارموني سمايل harmony smile  ، في التقويم اللساني الداخلي، روتشستر، الولايات المتحدة الأمريكية 2016
                                        </li>
                                        <li>
                                            شهادة المرحلة المتقدمة في زراعة الأسنان ، كلية الرياض لطب الأسنان ، الرياض 2012
                                        </li>
                                        <li>
                                            شهادة المرحلة الأساسية في زراعة الأسنان ، كلية الرياض لطب الأسنان ، الرياض 2012
                                        </li>
                                        <li>
                                            ماجستير تقويم الأسنان والفكين ، جامعة دمشق 2011
                                        </li>

                                        <li>
                                            دبلوم دراسات عليا، تقويم الأسنان والفكين ، جامعة دمشق 2008
                                        </li>
                                        <li>
                                            بكالريوس طب الأسنان وجراحتها ، جامعة دمشق 2005
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid md:grid-cols-2">
                                <div className="banners "></div>

                                <div className="p-10 flex flex-col justify-center">
                                    <h1 className="text-3xl mb-5 font-bold">
                                        المؤهلات
                                    </h1>
                                    <ul className="list-disc text-sm py-16 lg:text-base ">
                                        <li>
                                            مصنف كنائب في تقويم الأسنان من هيئة التخصصات الصحية السعودية
                                        </li>
                                        <li>
                                            حائز على كرسي المعيدية في جامعة دمشق 2007
                                        </li>
                                        <li>
                                            حائز على الترتيب الثاني على الدفعة في بكالريوس طب الأسنان ، جامعة دمشق 2005
                                        </li>
                                        <li>
                                            معالجة عدد كبير جدا من الحالات التقويمية ومن مختلف الأنواع
                                        </li>
                                        <li>
                                            تميز في إعادة معالجة الحالات التقويمية غير المعالجة بشكل جيد سابقا أو الناكسة بعد التثبيت
                                        </li>
                                        <li>
                                            تميز في معالجة حالات التشوهات الولادية من ناحية تقويمية مثل شقوق الشفة وقبة الحنك
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
                        الحالات الشهرية
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
                        قبل وبعد الصور
                        <div className="grid mt-7 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            <img src="img/result1.jpg" alt="" />
                            <img src="img/result2.jpg" alt="" />
                            <img src="img/result3.jpg" alt="" />
                            <img src="img/result4.jpg" alt="" />
                        </div>
                    </div>
                </div> */}
                <div className="w-full  py-10">
                    <div className="container w-max mx-auto shadow-xl m-5 p-10 lg:text-5xl text-3xl  text-center ">
                        خدمات طب الأسنان
                        <div className="grid max-w-7xl mt-10 px-10 mx-auto lg:grid-cols-3 gap-6">
                            <div className="md:h-96 md:w-96 h-60 w-60  s1a">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s2a">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s3a">

                            </div>

                            <div className="md:h-96 md:w-96 h-60 w-60  s4a">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s5a">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s6a">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s7a">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s8a">

                            </div>
                            <div className="md:h-96 md:w-96 h-60 w-60  s9a">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 py-10">
                    <div className="grid max-w-6xl mx-auto">

                        <div className="px-10 flex flex-col justify-center items-end">
                            <div className="text-2xl text-right">
                                اتصل بنا
                            </div>
                            <div className="flex items-center mt-5 justify-end">
                            </div>
                            <div className="grid grid-cols-5 md:grid-cols-5 gap-1 items-center mt-5 justify-end">
                                <a href="mailto:">
                                    <svg className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                </a>
                                <a href="https://wa.me/966536393232">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white  " viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                    </svg>
                                </a>
                                <a href="tel:+966536393232">
                                    <svg className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </a>
                                <a href="https://twitter.com/Dr_Ayman_mokdad">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white " viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </a>
                                <a href="/#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 rounded-full bg-cyan-500 p-2 text-white " viewBox="0 0 16 16">
                                        <path d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4.66.66 0 0 1 .202.09c.118.104.102.26.259.488.079.118.18.22.296.3.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087 4.446 4.446 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047Zm-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082-1.519 0-2.045-.801-2.904-1.084-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a.93.93 0 0 1 .197.022c.396.086.78.285 1.002.338.027.007.054.01.082.011.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.35.35 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a.912.912 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.14.413 1.991 2.89 3.189.147.073.394.222-.041.464Z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="text-right mt-5">
                                مركز الجناح الأبيض الطبي للاسنان
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
