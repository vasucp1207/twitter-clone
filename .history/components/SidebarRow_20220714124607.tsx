import React from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: String
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div className='flex max-w-fit  cursor-pointer space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 group
    transition-all duration-200'>
        <Icon class='h-6 w-6'/>
        <p className='group-hover:text-twitter hidden md:flex text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow