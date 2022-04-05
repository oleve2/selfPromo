//import Head from 'next/head'

// deployment
// https://stackoverflow.com/questions/64947025/does-next-js-production-build-need-node-modules-folder-in-the-server

import { HomePage } from "../components/homepage/HomePage"

export default function Home() {
  return (
    <div>
      <HomePage/>
    </div>
  )
}
