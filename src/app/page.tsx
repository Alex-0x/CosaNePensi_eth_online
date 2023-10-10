'use client'
import NavHome from '../components/navHome'
import { Connect } from '../components/Connect'
import "../assets/style/navbar.css"


export function Page() {
  return (
    <>
     <NavHome/>
     <br />
     <Connect/>
    </>
  )
}

export default Page
