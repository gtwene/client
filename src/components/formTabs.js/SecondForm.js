import React from 'react'
import {FcSearch} from "react-icons/fc"

const SecondForm = () => {
  return (
    <div>
     <div className='sm:grid grid-cols-2 gap-1'>
        <div className='border-2 border-gray'>
            <div className="border-2 border-gray bg-blue-800">
                <p className='m-1 text-white'>Commitment Details</p>
            </div>

            <div className='m-2'>
         <form class="w-full max-w-xl ">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Applicant Contract
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input placeholder='Applicant Contract Ref No.' class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Beneficiary Contract
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input placeholder='Beneficiary Contract Ref No.' class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Amount
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input placeholder='Amount Not Exceeding' class="bg-white appearance-none border-2 border-gray-200 rounded py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Tenor(In Days)
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Effective Date
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="date" />
                </div>
            </div>
            

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Expiry Date
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="date" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Closure Date
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="date" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Place of Expiry
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input placeholder='Beneficiary Contract Ref No.' class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Contract/Bid Date
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="date" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Seal Date
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="date" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Bid Validity Time
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input placeholder='Bid Validity Time (in Days)' class="bg-white appearance-none border-2 border-gray-200 rounded py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Goods Description
                    </label>
                </div>
                <div class="md:w-2/3">
                    <textarea placeholder='Contact Narration / Name and / or Goods Description' class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

           
          </form>
        </div>
        </div>

{/* Second */}
        <div className='border-2 border-gray'>
            <div className="border-2 border-gray bg-blue-800">
                <p className='m-1 text-white'>Collateral</p>
            </div>

            <div className='mt-2'>
            <form class="w-full max-w-xl ">
                <div class="md:flex md:items-center mb-6 ml-12">
                    <div class="md:w-1/3">
                        <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Collateral Type
                        </label>
                    </div>

                    <div className='flex space-x-1 mr-6'>
                        <div>
                            <input className='border rounded w-24' />
                        </div>

                        <div className='border sm:p-1'>
                            <FcSearch />
                        </div>

                        <div>
                        <input disabled class="bg-gray-200 border-2 border-gray-200 rounded w-full px-5" id="inline-full-name" type="text" />
                            {/* <input className='border rounded w-94' disabled /> */}
                        </div>
                    </div>

                </div>

                <div class="md:flex md:items-center mb-6 ml-12">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Currency
                        </label>
                    </div>

                    <div className='flex space-x-1 mr-6'>
                        <div>
                            <input className='border rounded w-28' />
                        </div>

                        <div className='border sm:p-1'>
                            <FcSearch />
                        </div>

                        <div className='flex border bg-gray-100 items-center'>
                            <input class="bg-gray-200 border-2 border-gray-200 rounded w-full px-5" id="inline-full-name" type="checkbox" />
                            <label>Manual&nbsp;Reversal&nbsp;of&nbsp;cash</label>
                        </div>
                    </div>

                </div>

                
                <div class="md:flex md:items-center mb-6 ml-12">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Percent
                        </label>
                    </div>

                    <div className='flex space-x-1 mr-6'>
                        <div>
                            <input className='border rounded w-24' />
                        </div>

                        <button className='border sm:p-1 invisible'>
                            <FcSearch />
                        </button>

                        <div className="invisible">
                        <input disabled class="bg-gray-200 border-2 border-gray-200 rounded w-full px-5" id="inline-full-name" type="text" />
                            {/* <input className='border rounded w-94' disabled /> */}
                        </div>
                    </div>

                </div>

                <div class="md:flex md:items-center mb-6 ml-12">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Exchange Rate
                        </label>
                    </div>

                    <div className='flex space-x-1 mr-6'>
                        <div>
                            <input className='border rounded w-24' />
                        </div>

                        <button className='border sm:p-1 rounded bg-blue-100 hover:bg-blue-500 hover:text-white'>
                            Pick&nbsp;Rate
                        </button>

                        <div className="invisible">
                        <input disabled class="bg-gray-200 border-2 border-gray-200 rounded w-full px-5" id="inline-full-name" type="text" />
                            {/* <input className='border rounded w-94' disabled /> */}
                        </div>
                    </div>

                </div>

                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Collateral Amt
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input placeholder='Applicant Contract Ref No.' class="bg-white appearance-none border-2 border-gray-200 rounded py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                    </div>
                 </div>

                 <div class="md:flex md:items-center mb-6 m-1">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Desription
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <textarea placeholder='Applicant Contract Ref No.' class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                    </div>
                 </div>

                 <div class="md:flex md:items-center mb-6 m-1">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Other Collaterals
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <textarea placeholder='Applicant Contract Ref No.' class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                    </div>
                 </div>

                 <hr />

                 <div class="md:flex md:items-center mb-6 m-1">
                    <div class="md:w-1/3">
                        <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Applicable Rules
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <select placeholder='Applicant Contract Ref No.' class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text">
                            <option>URDG</option>
                        </select>
                    </div>
                 </div>

                 <div className="border-2 border-gray bg-blue-800 mt-10">
                    <p className='m-1 text-white'>Collateral</p>
                </div>
                <div class="">
                    <textarea placeholder='' class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>

                <div className='flex justify-end space-x-5 mt-3 mr-2'>
                    <div className='border p-2 rounded-md bg-gray-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-indigo-900 duration-300 '>
                        <button className=''>Previous</button>
                    </div>
                    <div className='border p-2 rounded-md bg-gray-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-indigo-900 duration-300'>
                        <button>Save and Continue</button>
                    </div>
                </div>
                
            </form>
            </div>
        </div>
     </div>
    </div>
  )
}

export default SecondForm
