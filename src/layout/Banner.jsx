export default function Banner({Menu}) {
  return (
    <section>
            <div className="flex items-center justify-end mb-4 rounded bg-gray-50 dark:bg-gray-800 bg-[url('../assets/banner.webp')] bg-no-repeat bg-cover">
              <div className='flex justify-end h-full w-full p-10 backdrop-filter backdrop-blur'>
                <p className="text-white dark:text-white">
                  <p className="text-4xl font-semibold">Akash Pawar</p>
                  <p className="text-xl ">cwork177@gmail.com</p>
                  <div className='flex flex-row gap-2 mt-2'>
                    {Menu.map((menu) => (
                      <a target='__blank' aria-label="Socials" rel="noopener noreferrer" href={menu.link}>
                        <img className='w-6 h-6' src={`../assets/${menu.src}`} alt="" />
                      </a>
                    ))}
                  </div>
                </p>
              </div>
            </div>
          </section>
  )
}
