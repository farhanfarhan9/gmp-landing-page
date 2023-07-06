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
                        <div>
                            <Image
                                unoptimized
                                width={100}
                                height={100}
                                className="w-full"
                                src="/porto4_mobile.png"
                                alt=""
                            />
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}

export default OurProject;
