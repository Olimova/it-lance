import React from 'react'
import img from "../../assets/Group 87.png"

const Hero = () => {
  return (
    <>
        <section className='hero'>
          <div className="container">
            <div className='hero-wrapper'>
                <h1>
                      Проектирование и установка систем видеонаблюдения
                </h1>
                  <p>Защитите свой бизнес от неожиданных сбоев!</p>
                  <button className='hero-btn'>Узнать больше</button>
                  <img src={img} alt="" />
            </div>
          </div>
        </section>
    </>
  )
}

export default Hero