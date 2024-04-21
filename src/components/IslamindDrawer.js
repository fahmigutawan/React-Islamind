import { useLocation } from 'react-router-dom'
import ic_islamind_green from './../asset/images/ic_islamind_green.png'

export const IslamindDrawer = () => {
    return (
        <div className="bg-white shadow-md w-[100%] flex flex-col py-[64px] space-y-[24px]">
            <img src={ic_islamind_green} className='w-[100px] self-center' />
            <div>
                <a
                    href='/home-post'
                    className={`px-[24px] py-[10px] flex w-full hover:bg-[#eeeeee]  hover:cursor-pointer ${useLocation().pathname.startsWith('/home-post') ? 'bg-hijau bg-opacity-[0.11]' : 'bg-white'}`}
                >
                    Postingan
                </a>
                <a
                    href='/home-book'
                    className={`px-[24px] py-[10px] flex w-full hover:bg-[#eeeeee]  hover:cursor-pointer ${useLocation().pathname.startsWith('/home-book') ? 'bg-hijau bg-opacity-[0.11]' : 'bg-white'}`}
                >
                    Buku
                </a>
            </div>
        </div>
    )
}