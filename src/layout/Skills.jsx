export default function Skills() {
    return (
        <section>
            <div className="dark:text-white text-2xl pb-4">
                Skills
            </div>
            <div className="grid grid-col gap-4 mb-4 md:grid-flow-col-1 lg:grid-cols-2 xl:grid-cols-4">
                <div className="flex flex-col rounded bg-gray-50 dark:bg-gray-800 p-4">
                    <p className="text-2xl font-medium text-white">
                        Frontend
                    </p>
                    <div className='flex flex-wrap gap-3 py-2'>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >React js</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Next js</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >React native</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Redux</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >JavaScript</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Html</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >CSS</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Tailwind</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Bootstrap</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >HBS</div>
                    </div>
                </div>
                <div className="flex flex-col rounded bg-gray-50 dark:bg-gray-800 p-4">
                    <p className="text-2xl font-semibold text-white">
                        Backend
                    </p>
                    <div className='flex flex-wrap gap-3 py-2'>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Node Js</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Express Js</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >JavaScript</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >TypeScript</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >jwt</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Zod</div>
                    </div>
                </div>
                <div className="flex flex-col rounded bg-gray-50 dark:bg-gray-800 p-4">
                    <p className="text-2xl font-semibold text-white">
                        Database
                    </p>
                    <div className='flex flex-wrap gap-3 py-2'>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Postgres</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Mongodb</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Redis</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Sql</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Prisma</div>
                    </div>
                </div>
                <div className="flex flex-col rounded bg-gray-50 dark:bg-gray-800 p-4">
                    <p className="text-2xl font-semibold text-white">
                        Devops
                    </p>
                    <div className='flex flex-wrap gap-3 py-2'>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Git</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Github</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Gitlab</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >Docker</div>
                        <div className='p-2 rounded-lg text-gray-400 bg-gray-900' >AWS</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
