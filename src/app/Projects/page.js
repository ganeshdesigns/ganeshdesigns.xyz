import React from 'react'

const Projects = () => {
    return (
        <div className='grid h-screen w-full items-center justify-center bg-[#333]'>
            <div className="p-12 bg-[#333]">
                <div className="mx-auto max-w-7xl px-6 bg-[#333]">
                    <div className="mx-auto max-w-2xl lg:mx-0 bg-[#333]">
                        <h2 className="text-3xl font-mono tracking-tight font-bold text-[#ceed67]">projects</h2>
                        <p className="mt-4 mb-8 text-sm font-mono leading-8 text-[#d9d9d9]">these are projects which are pinned visit github for more.</p>
                    </div>
                    <div className="bg-[#333] mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 border-t border-gray-200 pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div className="mt-10 flex items-center gap-x-4 text-sm">
                                <time dateTime="2020-03-16" className="font-mono text-[#d9d9d9]">Decemeber 16, 2022</time>

                            </div>
                            <div className="group relative">
                                <p className="mt-5 text-lg font-mono font-bold leading-6 text-[#ceed67] hover:scale-125 duration-300 group-hover:">
                                    <a href="https://github.com/ganeshdesigns/spotlot" className="relative z-10 rounded-full bg-[#ceed67] px-3 py-2 font-mono duration-300 text-sm text-[#333] hover:text-[#ceed69] hover:bg-[#333]">spotlot</a>
                                </p>
                                <p className="mt-5 line-clamp-3 text-xs font-mono leading-6 text-[#d9d9d9]">this is a automated parking lot core panel prototype made with self assigners, opencv, tesseractocr & anpr this is my semester long project for semester 4.</p>
                            </div>
                        </article>
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div className="mt-10 flex items-center gap-x-4 text-sm">
                                <time dateTime="2020-03-16" className="font-mono text-[#d9d9d9]">August 24, 2023</time>

                            </div>
                            <div className="group relative">
                                <p className="mt-5 text-lg font-mono font-bold hover:scale-125 leading-6 text-[#ceed67]  duration-300 group-hover:">
                                    <a href="https://github.com/ganeshdesigns/login-app" className="relative z-10 rounded-full bg-[#ceed67] px-3 py-2 font-mono duration-300 text-sm text-[#333] hover:text-[#ceed69] hover:bg-[#333]">login-app</a>
                                </p>
                                <p className="mt-5 line-clamp-3 text-xs font-mono leading-6 text-[#d9d9d9]">iOS app for login page & create account page is made using xcode's storyboard swift and firebase authentication.</p>
                            </div>
                        </article>
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div className="mt-10 flex items-center gap-x-4 text-sm">
                                <time dateTime="2020-03-16" className="font-mono text-[#d9d9d9]">November 2, 2022</time>

                            </div>
                            <div className="group relative">
                                <p className="mt-5 text-lg font-mono font-bold hover:scale-125 leading-6 text-[#ceed67]  duration-300 group-hover:">
                                    <a href="https://github.com/ganeshdesigns/recommendation-system" className="relative z-10 rounded-full bg-[#ceed67] px-3 py-2 font-mono duration-300 text-sm text-[#333] hover:text-[#ceed69] hover:bg-[#333]">recommendation-system
                                    </a>
                                </p>
                                <p className="mt-5 line-clamp-3 text-xs font-mono leading-6 text-[#d9d9d9]">recommendation system with data.txt and u.data user ratings and also return analytics of most popular on watches and recommended based on liking</p>
                            </div>
                        </article>
                    </div>
                    <div className="bg-[#333] mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div className="mt-10 flex items-center gap-x-4 text-sm">
                                <time dateTime="2020-03-16" className="font-mono text-[#d9d9d9]">Decemeber 12, 2022</time>

                            </div>
                            <div className="group relative">
                                <p className="mt-5 text-lg font-mono font-bold leading-6 hover:scale-125 text-[#ceed67]  duration-300 group-hover:">
                                    <a href="https://github.com/ganeshdesigns/raincheck" className="relative z-10 rounded-full bg-[#ceed67] px-3 py-2 font-mono duration-300 text-sm text-[#333] hover:text-[#ceed69] hover:bg-[#333]">raincheck</a>
                                </p>
                                <p className="mt-5 line-clamp-3 text-xs font-mono leading-6 text-[#d9d9d9]">a project of my personal intrest it helps show weather in the location of the user also return analytics of every deatil of  weather very modern user interface.</p>
                            </div>
                        </article>
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div className="mt-10 flex items-center gap-x-4 text-sm">
                                <time dateTime="2020-03-16" className="font-mono text-[#d9d9d9]">August 13, 2023</time>

                            </div>
                            <div className="group relative">
                                <p className="mt-5 text-lg font-mono font-bold leading-6 hover:scale-125 text-[#ceed67]  duration-300 group-hover:">
                                    <a href="https://github.com/ganeshdesigns/geocoding" className="relative z-10 rounded-full bg-[#ceed67] px-3 py-2 font-mono duration-300 text-sm text-[#333] hover:text-[#ceed69] hover:bg-[#333]">geocoding</a>
                                </p>
                                <p className="mt-5 line-clamp-3 text-xs font-mono leading-6 text-[#d9d9d9]">simple adverts networking with includes user data cleaning and viewing statistics upadating it constantly for neural network implementation.</p>
                            </div>
                        </article>
                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div className="mt-10 flex items-center gap-x-4 text-sm">
                                <time dateTime="2020-03-16" className="font-mono text-[#d9d9d9]">Decemeber 6, 2021</time>

                            </div>
                            <div className="group relative">
                                <p className="mt-5 text-lg font-mono font-bold leading-6 text-[#ceed67] hover:scale-125 duration-300 group-hover:">
                                    <a href="https://github.com/ganeshdesigns/authsys" className="relative z-10 rounded-full bg-[#ceed67] px-3 py-2 font-mono duration-300 text-sm text-[#333] hover:text-[#ceed69] hover:bg-[#333]">authsys</a>
                                </p>
                                <p className="mt-5 line-clamp-3 text-xs font-mono leading-6 text-[#d9d9d9]">authSys is authorisation system with qrcodes it will help manage huge traffic and verification simple & clean.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
