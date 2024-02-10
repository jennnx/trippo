import Image from "next/image";
import GoldenGateBridge from "@/assets/golden-gate-bridge.jpg";
import EifelTower from "@/assets/eiffel-tower.jpg";
import Tokyo from "@/assets/tokyo.jpg";
import PaperPlane from "@/assets/paper-plane.svg";
import Link from "next/link";

const faqs = [
    {
        question: "How does Trippo work?",
        answer: "You can tell Trippo the type of trip you want to take, as well as some additional details. It'll give you a list of destinations that match your criteria, then generate an itinerary for your adventure.",
    },
    {
        question: "Is it free?",
        answer: "You charge however much you want. You're the one building this throuhgout this module!",
    },
    {
        question: "Wait, this is part of a course?",
        answer: "Yes! Trippo is the first of four projects you'll build as part of learnnext.ai. If you're interested in building real-world AI applications powered by Next.js, check it out!",
    },
];

export default function Home() {
    return (
        <div className="px-6 bg-blue-50/80">
            <div className="flex flex-col mx-auto max-w-5xl">
                {/* Navbar */}
                <nav className="flex justify-between py-6 my-4 items-center">
                    <Link href="/">
                        <div className="flex items-center space-x-2">
                            <Image
                                src={PaperPlane}
                                alt="Trippo Logo"
                                height={36}
                                width={36}
                            />
                            <p className="text-xl font-bold">Trippo</p>
                        </div>
                    </Link>
                    <Link
                        href="/dashboard"
                        className="font-semibold px-4 py-2 text-white bg-blue-600 rounded-lg"
                    >
                        Get started
                    </Link>
                </nav>
                {/* Hero */}
                <section className="text-center mt-12 md:mt-20">
                    <h1 className="text-6xl leading-[4.5rem] mb-6">
                        Discover your Next Travel
                        <br />
                        Destination{" "}
                        <span className="bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 text-transparent bg-clip-text font-semibold">
                            With AI
                        </span>
                    </h1>
                    <p className="mb-8 text-lg">
                        Find the perfect hidden-gem travel destination for your
                        next trip,
                        <br />
                        powered by OpenAI&apos;s cutting-edge GPT technology.
                    </p>
                    <Link
                        href="/dashboard"
                        className="rounded-lg bg-blue-600 text-white px-4 py-2 font-semibold"
                    >
                        Try it for Free
                    </Link>
                </section>
            </div>
            <div className="hidden md:block relative 2xl:hidden">
                {/* Circles */}
                <div className="w-[40rem] h-[40rem] absolute rounded-full -z-10 border border-blue-500 bg-transparent left-0 bototm-0 -translate-y-1/3 -translate-x-1/2" />
                <div className="w-[50rem] h-[50rem] absolute rounded-full -z-10 border border-blue-500 bg-transparent right-0 bototm-0 -translate-y-1/4 translate-x-1/2" />
            </div>
            {/* Images */}
            <section className="md:grid grid-cols-9 grid-rows-1 gap-12 mx-auto max-w-6xl pt-16 pb-40 md:h-[700px] md:px-8 relative">
                <Image
                    className="rounded-xl col-span-3 mt-8 h-3/5 object-cover "
                    src={GoldenGateBridge}
                    alt="Golden gate bridge"
                />
                <Image
                    className="rounded-xl col-span-3 h-full mt-20 object-cover object-bottom hidden md:block"
                    src={EifelTower}
                    alt="Eiffel Tower"
                />
                <Image
                    className="rounded-xl col-span-3 h-4/5 object-cover hidden md:block"
                    src={Tokyo}
                    alt="Tokyo"
                />
            </section>
            <section>
                <div className="mx-auto max-w-5xl px-6 pb-24 md:pt-16">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-5">
                            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                                Frequently asked questions
                            </h2>
                            <p className="mt-4 text-base leading-7 text-gray-600">
                                Interested in building this yourself? Enroll in
                                the course today at{" "}
                                <Link
                                    href="https://learnnext.ai"
                                    className="font-semibold text-blue-600 hover:text-blue-500"
                                >
                                    learnnext.ai
                                </Link>
                                .
                            </p>
                        </div>
                        <div className="mt-10 lg:col-span-7 lg:mt-0">
                            <dl className="space-y-10">
                                {faqs.map((faq, index) => (
                                    <div key={"faq" + index}>
                                        <dt className="text-base font-semibold leading-7 text-gray-900">
                                            {faq.question}
                                        </dt>
                                        <dd className="mt-2 text-base leading-7 text-gray-600">
                                            {faq.answer}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <div className="max-w-5xl text-center md:text-left md:flex mx-auto justify-between py-16 items-center mt-16 px-6">
                <div>
                    <p className="text-xl leading-9">Trippo.co</p>
                    <p className="text-sm text-gray-500">All rights reserved</p>
                </div>
                <div>
                    <p className="text-gray-700">
                        Build it yourself at{" "}
                        <Link
                            className="text-blue-600 hover:text-blue-500 font-semibold"
                            href="https://learnnext.ai"
                        >
                            learnnext.ai
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
