import React from 'react'
import logo from '../images/logo.svg'
import store from '../images/store.svg'
import user from '../images/user.svg'
import cart from '../images/cart.svg'
import dots from '../images/dots.svg'
export const Header = () => {
  return (
    <>
    <div className='row header'>
        <div className='col-md-1 logo d-none d-sm-block'>
            <img src={logo} />
        </div>
        <div className='col-md-7 search'>
            <button className='btn '><i className='fa-solid fa-search'></i></button>
            <input type='text' placeholder='Search for Products, Brands and More' />
        </div>
        <div className='col-md-4 d-none d-sm-block'>
            <div className='store'>
                <img src={store} />
                <span>Become a Seller</span>
            </div>
            <div className='user'>
                <img src={user} />
                <span>Narasimha</span>
            </div>
            
            <div className='cart'>
                <img src={cart} />
                <span>Cart</span>
            </div>
            <div className='dots'>
                <img src={dots} />
            </div>
        </div>
    </div>
    </>
  )
}
