export default function Footer({Menu}) {
    return (
        <>
            <section>
                <div className="flex flex-col items-center justify-center h-40 border-b-2 border-gray-700 rounded bg-gray-50 dark:bg-gray-800">
                    <p className='text-sm p-4 text-white'>Connect with me</p>
                    <div className='flex flex-row gap-3'>
                        {Menu.map((menu,i) => (
                        <a key={i} target='_blank' aria-label="Socials" rel="noopener noreferrer" href={menu.link}>
                            <img className='w-6 h-6' alt="" src={`./assets/${menu.src}`} />
                        </a>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center bg-gray-800'>
                    <p className='p-4 text-center text-white'>Copyright © 2024 All right Reversed | Develop by <a className=" text-white pb-0.5 border-b-2 border-b-white hover:text-blue-500 hover:border-b-blue-500" target='_blank' href='https://www.instagram.com/mr.akki_1604/'>@Akash Pawar</a></p>
                </div>
            </section>
        </>
    )
}
