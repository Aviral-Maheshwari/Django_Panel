import React from 'react'
import Button from './Button'
import Footer from './Footer'
import Header from './Header'
const Main = () => {
    return (
        <>

            <div className='container '>
                <div className='p-5 text-center bg-light-dark rounded'>
                    <h1 className='text-light'> Stock Prediction Portal</h1>
                    <p className='text-light lead'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nobis id repellendus quaerat culpa omnis sunt libero recusandae. Labore quos aliquid, molestiae optio nam libero repellat iusto nulla eveniet culpa.</p>

                    <Button text="Login" class="btn-outline-info" />

                </div>
            </div>



        </>
    )
}

export default Main