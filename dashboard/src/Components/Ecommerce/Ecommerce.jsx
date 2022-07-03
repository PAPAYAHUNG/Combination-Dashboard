import React from 'react'
import Button from '../SmallComponent/Button'
import {AiOutlineDeploymentUnit,AiFillAlert,AiFillControl,AiFillExperiment} from 'react-icons/ai'

function Ecommerce() {

  const StatusIcon = ({icon, quantity, percentage, title,color}) =>{
    return (
      <div className='text-center'>
          <span className='rounded-full p-4 ' style={{color}}>
          {icon}
          </span>
          <div className="flex">
            <span className="font-bold text-3xl">{quantity}</span>
            <span className="font-bold text-red-300">{percentage}</span>
          </div>

      </div>
    )
  }
  return (
    <div className='p-2'>
          <div className="mt-12 relative m-2 bg-hero-pattern h-56 w-full bg-center bg-cover">
                <div className="absolute top-3 left-3">
                      <p className='text-gray-500'>Earnings</p>
                      <p className='font-bold text-3xl'>$63,448.78</p>
                      <Button
                      color="white"
                      bgColor="orange"
                      content='Download'
                      size='lg'
                      />
                </div>
          </div>
          <div className="mt-12 flex gap-2">
            <div className="w-1/4">
                <StatusIcon
                icon = {<AiOutlineDeploymentUnit/>}
                quantity = "39,354"
                percentage ="4%"
                title = "Customers"
                color ="green"
                />
            </div>
           
          </div>

    </div>
  )
}

export default Ecommerce