import React from 'react'

const FourthForm = () => {
  return (
    <div className=''>
        <div className='flex border m-2 space-x-20 bg-gray-200'>
      <div className='mt-2'>
      <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Total
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>
      </div>

      <div className='mt-2'>
      <div class="md:flex md:items-center mb-6">
                <div class="md:w-2/3">
                    <button class="bg-white appearance-none border-2 border-gray-200 rounded  py-1 px-4 text-gray-700 leading-tight transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-300" id="inline-full-name" type="button" value="">
                        View&nbsp;Fees&nbsp;and&nbsp;Commission
                    </button>
                </div>
            </div>
      </div>
      </div>
    </div>
  )
}

export default FourthForm
