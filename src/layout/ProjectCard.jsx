

export default function ProjectCard() {
    const Projectdetails = [
        { src: "epic.jpeg", tile: "Epic Clone", sub: "Node.js, Express.js, HBS, JavaScript, Mongodb, Bootstrap", git: "epic-clone" },
        { src: "bms.jpg", tile: "BookMyShow Clone", sub: "Node.js, Express.js, HBS, JavaScript, Mongodb, Bootstrap", git: "BookMyShow-clone" },
        { src: "venus.png", tile: "Venus International", sub: "React, Node.js, Express.js, JavaScript, React-router, Tailwind CSS", git: "venus" },
        // { src: "folder.png", tile: "In Development", sub: "React, Node.js, Express.js, React-router, Tailwind CSS", git: "" }
    ];
    return (
        <section>
            <div className="dark:text-white text-2xl pb-4">
                Projects
            </div>
            <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-5 ">

                {Projectdetails.map((Projects) => (
                    <div className="flex flex-col bg-white rounded-xl dark:bg-gray-800">
                        <a target="_blank" href={`https://github.com/akashpawar43/${Projects.git}`}>
                            <div className="relative aspect-video overflow-hidden rounded-t-xl">
                                <img alt="Solidity" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} sizes="100vw" src={`./src/assets/${Projects.src}`} />
                                <div className="progress-bar">
                                    <div className="h-full bg-btnHighlight" style={{ width: "90%" }}>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="grid gap-1 px-4 py-5">
                            <div className="text-highlight font-bold dark:text-white">{Projects.tile}</div>
                            <div className="text-sm dark:text-gray-500">{Projects.sub}</div>
                        </div>
                    </div>
                ))}

                <div className="flex flex-col bg-white rounded-xl dark:bg-gray-800">
                    <a target="_blank" href="/">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                            <div className='flex justify-center justify-items-center h-full'>
                                <img alt="In Progress" loading="lazy" decoding="async" data-nimg="fill" src={folder} />
                            </div>
                            {/* <img alt="IN Progress" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} sizes="100vw" srcset="/_next/image?url=%2Ftech%2Fweb3%2Fsolidity.jfif&amp;w=640&amp;q=75 640w, /_next/image?url=%2Ftech%2Fweb3%2Fsolidity.jfif&amp;w=750&amp;q=75 750w, /_next/image?url=%2Ftech%2Fweb3%2Fsolidity.jfif&amp;w=828&amp;q=75 828w, /_next/image?url=%2Ftech%2Fweb3%2Fsolidity.jfif&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Ftech%2Fweb3%2Fsolidity.jfif&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Ftech%2Fweb3%2Fsolidity.jfif&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Ftech%2Fweb3%2Fsolidity.jfif&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Ftech%2Fweb3%2Fsolidity.jfif&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2Ftech%2Fweb3%2Fsolidity.jfif&amp;w=3840&amp;q=75" /> */}
                            <div className="progress-bar">
                                <div className="h-full bg-btnHighlight" style={{ width: "90%" }}>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div className="grid gap-1 px-4 py-5">
                        <div className="text-highlight font-bold dark:text-white">In Development</div>
                        <div className="text-sm dark:text-gray-500">React, Node.js, Express.js, JavaScript</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
