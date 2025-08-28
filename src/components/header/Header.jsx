import React from 'react'
import { Heder } from '../../static'
import img from "../../assets/IMAGE (14).svg"

const Header = () => {
  return (
    <>
        <header className='heaader'>
            <div className="header-wrapper">
                  <div>
                      <img src={img} alt="" />
                  </div>
                  {
                      Heder?.map((item, inx) => (
                          <ul key={inx}>
                              <li className='list'>{item}</li>
                          </ul>
                      ))
                  }
                  <div className='button'>
                      <button className='btn'>Отправить заявку</button>
                      <button className="lang-btn">РУС</button>
                  </div>
            </div>
        </header>
    </>
  )
}

export default Header