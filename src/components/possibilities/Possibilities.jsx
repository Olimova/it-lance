import React from 'react'
import { POSSIBILITIE } from '../../static/index'

const Possibilities = () => {
    return (
        <section className='possibilities'>
            <div className="container">
                <div className="possibilities-wrapper">
                    <h3>Возможности</h3>
                    <div className="cards">
                        {POSSIBILITIE?.map((item) => (
                            <div key={item.id} className='card'>
                                <img src={item.img} alt="" className='card-img' />
                                <img src={item.span} alt="" className='card-image' />
                                <h4 className='card-tag'>{item.tag}</h4>
                                <p className='card-title'>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Possibilities
