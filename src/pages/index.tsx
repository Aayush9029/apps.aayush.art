import { Inter } from 'next/font/google'
import { myApps } from '@/data/apps'
import { SingleApp } from '@/lib/components/singleapp'
import { BlurCircle } from '@/lib/components/blurCircle'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <BlurCircle />

      <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        {myApps.map((app) => (

          <SingleApp key={app.link} {...app} />

        ))}
      </div>

      <p className="fixed left-0 bottom-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mt-4 px-10">
        📦 These some of the apps are deployed on Apple App Store & Github.
      </p>

    </main >
  )
}
