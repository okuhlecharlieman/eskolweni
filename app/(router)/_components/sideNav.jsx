import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

function sideNav() {
    const menu =[{id:1,name:"All courses",icon:BookOpen},{id:2,name:"Membership",icon:BadgeIcon},{id:3,name:'Be Instructor',icon:GraduationCap}]
  return (
    <div>
        <Image src="/logo.svg" alt='logo' width={170} height={80}/>sideNav</div>
  )
}

export default sideNav