import { Inter } from 'next/font/google'
import { myApps } from '@/data/apps'
import { SingleApp } from '@/lib/components/singleapp'
import { BlurCircle } from '@/lib/components/blurCircle'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <main
      className={`md:pt-2 mt-32 flex min-h-screen flex-col items-center justify-between md:p-24 p-2  ${inter.className}`}
    >

      <BlurCircle />

      <div className="grid text-center grid-cols-0 lg:mb-0 lg:grid-cols-2 lg:text-left ">
        {myApps.map((app) => (
          <SingleApp key={app.name} app={app} />

        ))}
      </div>

      <p className="z-10 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        📦 Here&apos;s all the apps that I&apos;ve deployed to the web
      </p>

    </main >
  )
}
