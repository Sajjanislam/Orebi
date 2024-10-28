import React, { useEffect, useState } from 'react'
import Container from './Layer/Container'
import { MdOutlineSignalCellularAlt2Bar } from 'react-icons/md'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { BiSolidDownArrow } from 'react-icons/bi'
import Li from './Layer/Li'
import MegaLi from '../../src/component/Layer/MegaLi'


const Sarchbar = () => {
  let [show, setShow] = useState(false)
 


  return (
    <div className='bg-[#C4C4C4] md:py-6 md:px-0 p-2'>
      <Container className={'flex md:justify-between items-center  gap-2 md:gap-0 relative font-DM'}> 

        <div className="1 flex items-center gap-2 text-primary text-sm font-DM cursor-pointer z-40"  onClick={() => setShow(!show)} >
        <MdOutlineSignalCellularAlt2Bar className='rotate-90 cursor-pointer'/>
        <p className='md:block hidden' >Shop by Category</p>
        </div>

        <ul className={`w-[263px] bg-slate-800 absolute left-0 top-full transition-all duration-700 ${show ? " opacity-100 visible" : " invisible opacity-0"} z-50`}>

            <Li magaMenu='h-full' className="hover:text-white transition-all duration-200 block py-4 px-5 group hover:pl-8" liContent='Accesories' >

              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>

              </Li>            

            <Li nayan={false} magaMenu='hidden' className="hover:text-white transition-all duration-200 block py-4 px-5 group hover:pl-8" liContent='Furniture'/>


            <Li magaMenu='h-full' className="hover:text-white transition-all duration-200 block py-4 px-5 group hover:pl-8" liContent='Electronics'>
            <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
            </Li>

        
            <Li nayan={false} magaMenu='hidden' className="hover:text-white transition-all duration-200 block py-4 px-5 group hover:pl-8" liContent='Clothes'/>
            <Li magaMenu='h-full' className="hover:text-white transition-all duration-200 block py-4 px-5 group hover:pl-8" liContent='Bags'>
            <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
              <ul>
                <h3>Phone</h3>
                <MegaLi MegaLiName='phone 01' href={'/'} />
                <MegaLi MegaLiName='phone 02' href={'/'} />
                <MegaLi MegaLiName='phone 03 ' href={'/'} />
                <MegaLi MegaLiName='phone 04' href={'/'} />
                <MegaLi MegaLiName='phone 05' href={'/'} />
                <MegaLi MegaLiName='phone 06' href={'/'} />
                <MegaLi MegaLiName='phone 07' href={'/'} />
              </ul>
            </Li>
            <Li nayan={false} magaMenu='hidden' className="hover:text-white transition-all duration-200 block py-4 px-5 group hover:pl-8" liContent='Home appliances'/>
        </ul>


        <div className="02 relative md:w-auto w-full">
          <input type="text" placeholder='Search Products' className='md:w-[601px] w-full  md:py-4 py-2 md:px-5 px-3 border-none outline-none' />

          <FaSearch className='absolute top-1/2 -translate-y-1/2 right-5 ' />
        </div>

        <div className="03 justify-center items-center gap-10 cursor-pointer md:flex hidden ">
          <div className="user flex  items-center gap-2">
          <FaUser />
          <BiSolidDownArrow />

          {/* <div className={'flex flex-col justify-center items-center '}>
            <div className='bg-[#2B2B2B] text-[#FFFFFF] w-[200px] flex justify-center py-4'>
              <p>my account</p>
            </div>
            <div className='text-[#2B2B2B] bg-[#FFFFFF] w-[200px] flex justify-center py-4'>
              <p>log out</p>
            </div>
          </div> */}

          </div>
          <div className="shop">
          <FaShoppingCart />
          </div>
        </div>
        
      </Container>
    </div>
  )
}

export default Sarchbar