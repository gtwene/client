import React from 'react'
import FormTab from './FormTab'
import {FcAddImage} from 'react-icons/fc'
import {FcSearch} from "react-icons/fc"
import {FcDeleteDatabase} from 'react-icons/fc'
import {MdLocalPolice} from 'react-icons/md'
import {AiFillEye} from 'react-icons/ai'
import {MdDoneOutline} from 'react-icons/md'
import {AiFillDelete} from "react-icons/ai"
import {FcCancel} from "react-icons/fc"
import {BsBackspaceReverseFill} from "react-icons/bs"
import {BiHelpCircle} from "react-icons/bi"
import {ImExit} from "react-icons/im"
import New from "../assets/add-file.png"
import Delete from "../assets/trash.png"
import Authority from "../assets/authorize.png"
import View from "../assets/eye.png"
import Okay from "../assets/checked.png"
import Cancel from "../assets/cancel.png"
import Reject from "../assets/reject.png"
import Help from "../assets/help.png"
import Exit from "../assets/exit.png"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';


const Guarantee_bond_creation = () => {
  return (
    <div>
        <div className='bg-blue-500 p-1 rounded text-white shadow'>
            Bank Guarantee Initial Details Entry
        </div>

        {/* <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
 
   
        </a> */}
        
        <div className='flex justify-center align-center items-center p-3 space-x-8 mt-2 cursor-pointer overflow-x-scroll sm:overflow-hidden '>
            <Tooltip title="New" placement="bottom">
                <div data-tooltip-target="tooltip-bottom" className=" rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-900 duration-300">
                    {/* <FcAddImage className=''/> */}
                    <div className='sm:hidden shadow'>
                        <FcAddImage />
                    </div>
                    <img src={New} width="50px" className='p-2' />
                    
                        {/* <Button>bottom</Button> */}
                
                </div>
            </Tooltip>
            
      

            <Tooltip title="Delete" placement="bottom">
                <div className=" rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-900 duration-300">
                    {/* <AiFillDelete /> */}
                    <div className='sm:hidden shadow'>
                        <AiFillDelete />
                    </div>
                    <img src={Delete} width="50px" className='p-2' />
                </div>
            </Tooltip>

            <Tooltip title="Authorize" placement="bottom">
                <div className=" rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-900 duration-300">
                    {/* <MdLocalPolice/> */}
                    <div className='sm:hidden shadow'>
                        <MdLocalPolice />
                    </div>
                    <img src={Authority} width="50px" className='p-2' />
                </div>
            </Tooltip>

            <Tooltip title="View" placement="bottom">
                <div className=" rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-900 duration-300">
                    {/* <AiFillEye /> */}
                    <div className='sm:hidden shadow'>
                        <AiFillEye />
                    </div>
                    <img src={View} width="50px" className='p-2'/>
                </div>
            </Tooltip>

            <Tooltip title="OK" placement="bottom">
                <div className=" rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-900 duration-300">
                    {/* <MdDoneOutline /> */}
                    <div className='sm:hidden shadow'>
                        <MdDoneOutline />
                    </div>
                <img src={Okay} width="50px" className='p-2' />
                {/* <FcSearch className='w-10 h-10' /> */}
                </div>
            </Tooltip>

            <Tooltip title="Cancel" placement="bottom">
                <div className=" rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-900 duration-300">
                    {/* <FcCancel /> */}
                    <div className='sm:hidden shadow'>
                        <FcCancel />
                    </div>
                    <img src={Cancel} width="50px" className='p-2'/>
                </div>
            </Tooltip>

            <Tooltip title="Reject" placement="bottom">
                <div className=" rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-900 duration-300">
                    {/* <BsBackspaceReverseFill /> */}
                    <div className='sm:hidden shadow'>
                        <BsBackspaceReverseFill />
                    </div>
                <img src={Reject} width="50px" className='p-2' />
                </div>
            </Tooltip>

            <Tooltip title="Help" placement="bottom">
                <div className=" rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-900 duration-300">
                    {/* <BiHelpCircle /> */}
                    <div className='sm:hidden shadow'>
                        <BiHelpCircle />
                    </div>
                <img src={Help} width="50px" className='p-2' />
                </div>
            </Tooltip>

            <Tooltip title="Exit" placement="bottom">
                <div className=" rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-900 duration-300">
                    <div className='sm:hidden shadow'>
                        <ImExit />
                    </div>
                    <img src={Exit} width="50px" className='p-2 ' />
                </div>
            </Tooltip>
           
        </div>

        <hr className="mb-2" />
        
        <div className='sm:flex sm:space-x-5 justify-end'>
            <div className='mb-2 space-x-2'>
                <label className='font-bold'>A/C Balance :</label>
                <input type="text" className='border-2 border-gray bg-gray-200 rounded' />
            </div>
            <div className='mb-2 space-x-2'>
                <label className='font-bold'>Guarantee No :</label>
                <input type="text" className='border-2 border-gray bg-gray-200 rounded' />
            </div>
        </div>
        <FormTab />
    </div>
  )
}

export default Guarantee_bond_creation
