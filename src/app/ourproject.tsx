import Image from 'next/image';
import ModalVideo from "@/components/modal/ModalVideo";

function OurProject() {
    return (
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
                                    src="/porto3.png"
                                    alt=""
                                />
                                <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div>
                                <div className="absolute top-0 bottom-0 right-0 left-0">
                                    <div className="flex justify-center h-full items-center">
                                        <button className="hover:scale-110">
                                            <ModalVideo>
                                                <svg
                                                    width="100"
                                                    height="100"
                                                    viewBox="0 0 125 125"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_97_745)">
                                                        <rect width="125" height="125" fill="white" />
                                                        <path
                                                            d="M84.9844 61.9707C88.3145 64.0117 88.3145 68.8457 84.9844 70.8867L47.1719 93.2305C43.7344 95.2715 39.4375 92.8008 39.4375 88.7188V44.0312C39.4375 39.627 44.0566 37.8008 47.1719 39.627L84.9844 61.9707Z"
                                                            fill="#0E6A37"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_97_745">
                                                            <rect width="125" height="125" fill="white" />
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
                        <div className="relative">
                            <Image
                                unoptimized
                                width={100}
                                height={100}
                                className="w-full"
                                src="/porto4_mobile.png"
                                alt=""
                            />
                            <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div>
                            <div className="absolute top-0 bottom-0 right-0 left-0">
                                <div className="flex justify-center h-full items-center">
                                    <button className="hover:scale-110">
                                        <ModalVideo>
                                            <svg
                                                width="100"
                                                height="100"
                                                viewBox="0 0 125 125"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_97_745)">
                                                    <rect width="125" height="125" fill="white" />
                                                    <path
                                                        d="M84.9844 61.9707C88.3145 64.0117 88.3145 68.8457 84.9844 70.8867L47.1719 93.2305C43.7344 95.2715 39.4375 92.8008 39.4375 88.7188V44.0312C39.4375 39.627 44.0566 37.8008 47.1719 39.627L84.9844 61.9707Z"
                                                        fill="#0E6A37"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_97_745">
                                                        <rect width="125" height="125" fill="white" />
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
    );
}

export default OurProject;
