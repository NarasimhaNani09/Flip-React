import React from 'react'
import topOffsets from '../images/topOffers.webp'
import mobiles from '../images/mobiles.webp'
import electronics from '../images/electronics.webp'
import appliances from '../images/appliances.webp'
import fashion from '../images/fashion.webp'
import beauty from '../images/beauty.webp'
import kitchen from '../images/kitchen.webp'
import furniture from '../images/furniture.webp'
import flights from '../images/flights.webp'
import grocery from '../images/grocery.webp'
export const Menu = () => {
  return (
    <>
        <div className='row menu justify-content-center'>
            <div className='col-md-1 text-center'>
                <img src={topOffsets} />
                <p>Top Offers</p>
            </div>

            <div className='col-md-1 text-center'>
                <img src={mobiles} />
                <p>Mobiles</p>
            </div>

            <div className='col-md-1 text-center'>
                <img src={electronics} />
                <p>Electronics</p>
            </div>

            <div className='col-md-1 text-center'>
                <img src={appliances} />
                <p>Appliances</p>
            </div>

            <div className='col-md-1 text-center'>
                <img src={fashion} />
                <p>Fashion</p>
            </div>

            <div className='col-md-1 text-center'>
                <img src={beauty} />
                <p>Beauty</p>
            </div>

            <div className='col-md-1 text-center'>
                <img src={kitchen} />
                <p>Home</p>
            </div>

            <div className='col-md-1 text-center'>
                <img src={furniture} />
                <p>Furniture</p>
            </div>

            <div className='col-md-1 text-center'>
                <img src={flights} />
                <p>Flights</p>
            </div>

            <div className='col-md-1 text-center'>
                <img src={grocery} />
                <p>Grocery</p>
            </div>
        </div>
    </>
  )
}
