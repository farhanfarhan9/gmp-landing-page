import Image from 'next/image';
import ModalVideo from "@/components/modal/ModalVideo";

function OurProject() {
    return (
        <>
            <div id="service" className="mb-2">
                <div className="hidden xl:flex">
                    <section className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    className="w-full"
                                    src="/porto1.png"
                                    alt=""
                                />
                            </div>
                            <div className="grid grid-rows-2 gap-4">
                                <div className="">
                                    <Image
                                        unoptimized
                                        width={100}
                                        height={100}
                                        className="w-full"
                                        src="/porto2new.png"
                                        alt=""
                                    />
                                </div>
                                <div className="relative">
                                    <Image
                                        unoptimized
                                        width={100}
                                        height={100}
                                        className="w-full"
                                        src="/porto31.png"
                                        alt=""
                                    />
                                    {/* <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div> */}
                                    <div className="absolute top-0 bottom-0 right-0 left-0">
                                        <div className="flex justify-center h-full items-center">
                                            <button className="hover:scale-110">
                                                <ModalVideo videoUrl="https://www.youtube.com/embed/CzEVDupsta0">
                                                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_205_110)">
                                                            <mask id="mask0_205_110" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="75">
                                                                <path d="M75 0H0V75H75V0Z" fill="white" />
                                                            </mask>
                                                            <g mask="url(#mask0_205_110)">
                                                                <path d="M75 0H0V75H75V0Z" fill="white" />
                                                                <path d="M50.9907 37.1824C52.9888 38.407 52.9888 41.3074 50.9907 42.532L28.3032 55.9383C26.2407 57.1629 23.6626 55.6805 23.6626 53.2313V26.4187C23.6626 23.7762 26.4341 22.6805 28.3032 23.7762L50.9907 37.1824Z" fill="#0E6A37" />
                                                            </g>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_205_110">
                                                                <rect width="75" height="75" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                </ModalVideo>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    className="w-full"
                                    src="/porto4new.png"
                                    style={{ height: "720px" }}
                                    alt=""
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="xl:hidden flex-row">
                    <section className="max-w-7xl mx-4">
                        <div className="grid grid-cols-2 grid-rows-2 gap-4">
                            <div>
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    className="w-full"
                                    src="/porto1_mobile.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    className="w-full"
                                    src="/porto2_mobile.png"
                                    alt=""
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    className="w-full"
                                    src="/porto4_mobile.png"
                                    alt=""
                                />
                                {/* <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div> */}
                                <div className="absolute top-0 bottom-0 right-0 left-0">
                                    <div className="flex justify-center h-full items-center">
                                        <button className="hover:scale-110">
                                            <ModalVideo videoUrl="https://www.youtube.com/embed/i9hKwHR4Mx0">
                                                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_205_110)">
                                                        <mask id="mask0_205_110" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="75">
                                                            <path d="M75 0H0V75H75V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask0_205_110)">
                                                            <path d="M75 0H0V75H75V0Z" fill="white" />
                                                            <path d="M50.9907 37.1824C52.9888 38.407 52.9888 41.3074 50.9907 42.532L28.3032 55.9383C26.2407 57.1629 23.6626 55.6805 23.6626 53.2313V26.4187C23.6626 23.7762 26.4341 22.6805 28.3032 23.7762L50.9907 37.1824Z" fill="#0E6A37" />
                                                        </g>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_205_110">
                                                            <rect width="75" height="75" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            </ModalVideo>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    className="w-full"
                                    src="/porto312_mobile.png"
                                    alt=""
                                />
                                {/* <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div> */}
                                <div className="absolute top-0 bottom-0 right-0 left-0">
                                    <div className="flex justify-center h-full items-center">
                                        <button className="hover:scale-110">
                                            <ModalVideo videoUrl="https://www.youtube.com/embed/CzEVDupsta0">
                                                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_205_110)">
                                                        <mask id="mask0_205_110" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="75">
                                                            <path d="M75 0H0V75H75V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask0_205_110)">
                                                            <path d="M75 0H0V75H75V0Z" fill="white" />
                                                            <path d="M50.9907 37.1824C52.9888 38.407 52.9888 41.3074 50.9907 42.532L28.3032 55.9383C26.2407 57.1629 23.6626 55.6805 23.6626 53.2313V26.4187C23.6626 23.7762 26.4341 22.6805 28.3032 23.7762L50.9907 37.1824Z" fill="#0E6A37" />
                                                        </g>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_205_110">
                                                            <rect width="75" height="75" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            </ModalVideo>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
            <div id="service">
                <div className="hidden xl:flex">
                    <section className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    className="w-full"
                                    src="/porto12.png"
                                    alt=""
                                />
                            </div>
                            <div className="grid grid-rows-2 gap-4">
                                <div className="relative">
                                    <Image
                                        unoptimized
                                        width={100}
                                        height={100}
                                        className="w-full"
                                        src="/porto33.png"
                                        alt=""
                                    />
                                    {/* <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div> */}
                                    <div className="absolute top-0 bottom-0 right-0 left-0">
                                        <div className="flex justify-center h-full items-center">
                                            <button className="hover:scale-110">
                                                <ModalVideo videoUrl="https://www.youtube.com/embed/i9hKwHR4Mx0">
                                                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_205_110)">
                                                            <mask id="mask0_205_110" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="75">
                                                                <path d="M75 0H0V75H75V0Z" fill="white" />
                                                            </mask>
                                                            <g mask="url(#mask0_205_110)">
                                                                <path d="M75 0H0V75H75V0Z" fill="white" />
                                                                <path d="M50.9907 37.1824C52.9888 38.407 52.9888 41.3074 50.9907 42.532L28.3032 55.9383C26.2407 57.1629 23.6626 55.6805 23.6626 53.2313V26.4187C23.6626 23.7762 26.4341 22.6805 28.3032 23.7762L50.9907 37.1824Z" fill="#0E6A37" />
                                                            </g>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_205_110">
                                                                <rect width="75" height="75" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                </ModalVideo>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <Image
                                        unoptimized
                                        width={100}
                                        height={100}
                                        className="w-full"
                                        src="/porto22new.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div>
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    className="w-full"
                                    src="/porto42new.png"
                                    style={{ height: "720px" }}
                                    alt=""
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="xl:hidden flex-row">
                    <section className="max-w-7xl mx-4">
                        <div className="grid grid-cols-2 grid-rows-2 gap-4">
                            <div>
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    className="w-full"
                                    src="/porto30_mobile.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    className="w-full"
                                    src="/porto312_mobile.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    className="w-full"
                                    src="/porto3_mobile.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <Image
                                    unoptimized
                                    width={100}
                                    height={100}
                                    className="w-full"
                                    src="/porto31_mobile.png"
                                    alt=""
                                />
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </>
    );
}

export default OurProject;
