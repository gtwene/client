import React, {useState, useEffect, useRef} from 'react'
import {FcSearch} from "react-icons/fc"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import Okay from "../../assets/icons8-checkbox-96.png"
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';





const FirstForm = () => {
    const [show, setShow] = useState(false);
    const [show_first, setShow_First] = useState(false);
    const [showDialogue, setShowDialogue] = useState(false); 
    const [currency, setCurrency] = useState(""); 
    const[selected , setSelected] = useState("")

    const target = useRef(null);

    const handleModalButton = (actual_code, description) => {


        document.getElementById("guaranteeType").value = actual_code;
        document.getElementById("guaranteeType2").value = description;
    
        setShow(false)
    };

    // useEffect(() => { 
    //     axios.post("http://localhost:4000/get-code-details", { 
    //     code: "BRA", 
    //     }).then(function (response) { 
    //     console.log(response.data); 
    //     localStorage.setItem("getBranch", JSON.stringify(response.data)); 
    //     })
    //     .catch(function (error) { 
    //     console.log(error); 
    //     }); 
    // }, []);

    useEffect(() => {
        // functions to get endpoints
        function getCurrency() {
          return axios.post("http://localhost:4000/get-code-details", {
            code: "CUR",
          });
        }
    
        function getBranch() {
          return axios.post("http://localhost:4000/get-code-details", {
            code: "BRA",
          });
        }
    
        function getSector() {
          return axios.post("http://localhost:4000/get-code-details", {
            code: "SEC",
          });
        }
    
        function getRo() {
          return axios.post("http://localhost:4000/get-code-details", {
            code: "REL",
          });
        }
    
        function getProduct() {
          return axios.post("http://localhost:4000/get-code-details", {
            code: "PRO",
          });
        }
    
        function getFacility() {
          return axios.post("http://localhost:4000/get-code-details", {
            code: "FAC",
          });
        }
    
        function getClassification() {
          return axios.post("http://localhost:4000/get-code-details", {
            code: "CLA",
          });
        }
    
        Promise.all([
          getCurrency(),
          getBranch(),
          getSector(),
          getRo(),
          getProduct(),
          getFacility(),
          getClassification(),
        ])
          .then(function (results) {
            // get currencies
            const currencies = results[0].data;
            localStorage.setItem("getCurrency", JSON.stringify(currencies));
    
            // get branches
            const branches = results[1].data;
            localStorage.setItem("getBranch", JSON.stringify(branches));
    
            // get sectors
            const various_sectors = results[2].data;
            localStorage.setItem("getSector", JSON.stringify(various_sectors));
    
            // get RO
            const ros = results[3].data;
            localStorage.setItem("getRo", JSON.stringify(ros));
    
            // get products
            const products = results[4].data;
            localStorage.setItem("getProduct", JSON.stringify(products));
    
            // get facility
            const facilities = results[5].data;
            localStorage.setItem("getFacility", JSON.stringify(facilities));
    
            // get classification
            const classifications = results[6].data;
            localStorage.setItem(
              "getClassification",
              JSON.stringify(classifications)
            );
            console.log(classifications);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);


    // Guarantee Type
    const popover_guaranteeType = (
        <Popover id="popover-basic">
          <Popover.Header as="h3" className="text-white" style={{backgroundColor:"#3b53db"}}>Guarantee Type</Popover.Header>
          <Popover.Body>
          <div className='overflow-y-scroll h-40 overflow-x-hidden overflow-y-hidden'> 
                {(() => { 
                    var getBranch = JSON.parse(
                        localStorage.getItem("getBranch")
                    ); 
                        var options = []; 
                            for (var i = 0; i < getBranch.length; i++) { 
                                const description = getBranch[i]["description"]; 
                                const actual_code = getBranch[i]["actual_code"]; 
                                const short_descrp = getBranch[i]["short_descrp"];
                            options.push(
                                    <div >
                                        <ul className=''>
                                            <div>
                                                <li className='text-left cursor-pointer transition ease-in-out delay-15
                                                hover:-translate-y-1 hover:scale-110 hover:text-red-600 duration-300' onClick={()=>handleModalButton(actual_code,description)}>{description}</li>
                                                </div>
                                                
                                        </ul>
                                    </div>
                                            
                                ); 
                            } 
                                console.log("options", options); 
                                return options; 
                        })
                    ()}
        </div>
          </Popover.Body>
        </Popover>
      );


    //   Customer ID
      const popover_customerid = (
        <Popover id="popover-basic">
          <Popover.Header as="h3" className="text-white" style={{backgroundColor:"#3b53db"}}>Customer ID</Popover.Header>
          <Popover.Body>
          <div className='overflow-y-scroll h-40 overflow-y-hidden'> 
                {(() => { 
                    var getBranch = JSON.parse(
                        localStorage.getItem("getBranch")
                    ); 
                        var options = []; 
                            for (var i = 0; i < getBranch.length; i++) { 
                                const description = getBranch[i]["description"]; 
                                const actual_code = getBranch[i]["actual_code"]; 
                                const short_descrp = getBranch[i]["short_descrp"];
                            options.push(
                                    <div >
                                        <ul className=''>
                                            <div>
                                                <li className='text-left cursor-pointer' onClick={()=>handleModalButton(actual_code,    description)}>{description}</li>
                                                </div>
                                                
                                        </ul>
                                    </div>
                                            
                                ); 
                            } 
                                console.log("options", options); 
                                return options; 
                        })
                    ()}
        </div>
          </Popover.Body>
        </Popover>
      );


      //   Debit Account
      const popover_debit_account = (
        <Popover id="popover-basic">
          <Popover.Header as="h3" className="text-white" style={{backgroundColor:"#3b53db"}}>Debit Account</Popover.Header>
          <Popover.Body>
          <div className='overflow-y-scroll h-40 overflow-y-hidden'> 
                {(() => { 
                    var getBranch = JSON.parse(
                        localStorage.getItem("getBranch")
                    ); 
                        var options = []; 
                            for (var i = 0; i < getBranch.length; i++) { 
                                const description = getBranch[i]["description"]; 
                                const actual_code = getBranch[i]["actual_code"]; 
                                const short_descrp = getBranch[i]["short_descrp"];
                            options.push(
                                    <div >
                                        <ul className=''>
                                            <div>
                                                <li className='text-left cursor-pointer' onClick={()=>handleModalButton(actual_code,    description)}>{description}</li>
                                                </div>
                                                
                                        </ul>
                                    </div>
                                            
                                ); 
                            } 
                                console.log("options", options); 
                                return options; 
                        })
                    ()}
        </div>
          </Popover.Body>
        </Popover>
      );


    //   Currency Amount
      const popover_currency_amount = (
        <Popover id="popover-basic">
          <Popover.Header as="h3" className="text-white" style={{backgroundColor:"#3b53db"}}>Currency Amount</Popover.Header>
          <Popover.Body>
          <div className='overflow-y-scroll h-40 overflow-y-hidden'> 
                {(() => { 
                    var getBranch = JSON.parse(
                        localStorage.getItem("getBranch")
                    ); 
                        var options = []; 
                            for (var i = 0; i < getBranch.length; i++) { 
                                const description = getBranch[i]["description"]; 
                                const actual_code = getBranch[i]["actual_code"]; 
                                const short_descrp = getBranch[i]["short_descrp"];
                            options.push(
                                    <div >
                                        <ul className=''>
                                            <div>
                                                <li className='text-left cursor-pointer' onClick={()=>handleModalButton(actual_code,    description)}>{description}</li>
                                                </div>
                                                
                                        </ul>
                                    </div>
                                            
                                ); 
                            } 
                                console.log("options", options); 
                                return options; 
                        })
                    ()}
        </div>
          </Popover.Body>
        </Popover>
      );


      // country
      const popover_country = (
        <Popover id="popover-basic">
          <Popover.Header as="h3" className="text-white" style={{backgroundColor:"#3b53db"}}>Country</Popover.Header>
          <Popover.Body>
          <div className='overflow-y-scroll h-40 overflow-y-hidden'> 
                {(() => { 
                    var getBranch = JSON.parse(
                        localStorage.getItem("getBranch")
                    ); 
                        var options = []; 
                            for (var i = 0; i < getBranch.length; i++) { 
                                const description = getBranch[i]["description"]; 
                                const actual_code = getBranch[i]["actual_code"]; 
                                const short_descrp = getBranch[i]["short_descrp"];
                            options.push(
                                    <div >
                                        <ul className=''>
                                            <div>
                                                <li className='text-left cursor-pointer' onClick={()=>handleModalButton(actual_code,    description)}>{description}</li>
                                                </div>
                                                
                                        </ul>
                                    </div>
                                            
                                ); 
                            } 
                                console.log("options", options); 
                                return options; 
                        })
                    ()}
        </div>
          </Popover.Body>
        </Popover>
      );


  return (
    <div className='sm:grid grid-cols-2 gap-1'>
      <div className='border-2 border-gray'>
        <div className="border-2 border-gray bg-[#0b5394]">
            <p className='m-1 text-white'>General</p>
        </div>
        <div>
            <div className='sm:flex items-center justify-center border border-gray sm:space-x-10 p-2 bg-gray-200'>
                <div className='space-x-1'>
                    <input type='radio' className='' />
                    <label className='font-bold'>Use Contigent Ticket</label>   
                </div>
                <div className='space-x-1'>
                    <input type='radio' className='' />
                    <label className='font-bold'>Trade Limit</label>   
                </div> 
                <div className='flex space-x-1'>
                    <label className='font-bold'>Cont <span className='sm:hidden'>Ticket No.</span> :</label>
                    <div className=''>
                        <input type='text' className='border-2 rounded border-gray w-20' />
                    </div> 
                </div> 
            </div>

            {/* First */}

            <div className='mt-3'>
            <div class="md:flex md:items-center mb-6 ml-12">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Guarantee Type
                    </label>
                </div>

                <div className='flex space-x-1 mr-6'>
                    <div>
                        <input id="guaranteeType" className='border rounded w-24 text-center' />
                    </div>

                    <OverlayTrigger trigger="click" placement="right" overlay={popover_guaranteeType}>
                        <div className='border rounded sm:p-1 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300'ref={target} onClick={() => setShow(!show)}>
                            <FcSearch />
                        </div>
                    </OverlayTrigger>

                   
                    {/* <Overlay target={target.current} show={show} placement="right">
                        {(props) => (
                        <Tooltip id="overlay-example" {...props}>
            
                             <div className='overflow-y-scroll h-40 overflow-y-hidden'> 
                                        {(() => { 
                                            var getBranch = JSON.parse(
                                            localStorage.getItem("getBranch")
                                            ); 
                                            var options = []; 
                                            for (var i = 0; i < getBranch.length; i++) { 
                                            const description = getBranch[i]["description"]; 
                                            const actual_code = getBranch[i]["actual_code"]; 
                                            const short_descrp = getBranch[i]["short_descrp"];
                                            options.push(
                                            <div >
                                                <ul className=''>
                                                    <div>
                                                        <li className='text-left cursor-pointer' onClick={()=>handleModalButton(actual_code, description)}>{description}</li>
                                                    </div>
                                                
                                                </ul>
                                            </div>
                                            
                                            ); 
                                            } 
                                            console.log("options", options); 
                                            return options; 
                                            })
                                        ()}
                                </div> 
                        </Tooltip>
                        )}
                    </Overlay> */}

                       

                    <div>
                    <input  class="bg-gray-200 border-2 border-gray-200 rounded w-full px-5" id="guaranteeType2" />
                        {/* <input className='border rounded w-94' disabled /> */}
                    </div>
                </div>

            </div>

            <div class="md:flex md:items-center mb-6 ml-12">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Customer ID
                    </label>
                </div>

                <div className='flex space-x-1 mr-6'>
                    <div>
                        <input className='border rounded w-16' />
                    </div>

                    <OverlayTrigger trigger="click" placement="right" overlay={popover_customerid}>
                        <div className='border rounded cursor-pointer sm:p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300'>
                            <FcSearch />
                        </div>
                    </OverlayTrigger>

            

                    <div>
                        <input disabled class="bg-gray-200 border-2 border-gray-200 rounded sm:w-full sm:px-5" id="inline-full-name" type="date" />
                            {/* <input className='border rounded w-94' disabled /> */}
                        </div>
                </div>

            </div>


                <div class="mr-7 ml-20">
                    <input disabled class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 text-gray-700 leading-tight" id="inline-full-name" type="text" />
                </div>


                <div class="md:flex md:items-center mb-6 ml-12 mt-3">
                    <div class="md:w-1/3">
                        <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Debit Account
                        </label>
                    </div>

                    <div className='flex space-x-1 mr-6'>
                        <div>
                            <input className='border rounded w-24' />
                        </div>

                        <OverlayTrigger trigger="click" placement="right" overlay={popover_debit_account}>
                            <div className='border rounded sm:p-1 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300'>
                                <FcSearch />
                            </div>
                        </OverlayTrigger>
                        <div>
                        <input placeholder=' Debit Account Currency' disabled class="bg-gray-200 border-2 border-gray-200 rounded w-full px-5" id="inline-full-name" type="text" />
                            {/* <input className='border rounded w-94' disabled /> */}
                        </div>
                    </div>

                </div>  
               

                <div class="md:flex md:items-center mb-6 ml-12 mt-3">
                    <div class="md:w-1/3">
                        <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Currency Amount
                        </label>
                    </div>

                    <div className='flex space-x-1 mr-6'>
                        <div>
                            <input className='border rounded w-24' />
                        </div>

                        <OverlayTrigger trigger="click" placement="right" overlay={popover_currency_amount}>
                            <div className='border rounded sm:p-1 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300' onClick={() => setShow(true)}>
                                <FcSearch />
                            </div>
                        </OverlayTrigger>

                        <div>
                        <input class="bg-white border-2 border-gray-200 rounded w-full px-5" id="inline-full-name" type="text" />
                        </div>
                    </div>

                </div> 

            </div>

        </div>
      </div>
      <div className='border-2 border-gray'>
        <div className="border-2 border-gray bg-[#0b5394]">
            <p className='m-1 text-white' >Applicant</p>
        </div>
        <div className='m-2'>
         <form class="w-full max-w-lg ">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Address 1
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Address 2
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Address 3
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6 ml-12">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Country
                    </label>
                </div>

                <div className='flex space-x-1 mr-6'>
                    <div>
                        <input className='border rounded w-24' />
                    </div>

                    <OverlayTrigger trigger="click" placement="right" overlay={popover_country}>
                        <div className='border rounded sm:p-1 border rounded sm:p-1 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300' onClick={() => setShow(true)}>
                            <FcSearch />
                        </div>
                    </OverlayTrigger>

                    <div>
                    <input class="bg-white border-2 border-gray-200 rounded w-full px-5" id="inline-full-name" type="text" />
                    </div>
                </div>

            </div>

           
          </form>
        </div>
      </div>

      <div className='border-2 border-gray'>
        <div className="border-2 border-gray bg-[#0b5394]">
            <p className='m-1 text-white'>Beneficiary</p>
        </div>

        <div className='m-2'>
         <form class="w-full max-w-lg">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Address 1
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Address 2
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Address 3
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6 ml-12">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Country
                    </label>
                </div>

                <div className='flex space-x-1 mr-6'>
                    <div>
                        <input className='border rounded w-24' />
                    </div>

                    <OverlayTrigger trigger="click" placement="right" overlay={popover_country}>
                        <div className='border rounded sm:p-1 border rounded sm:p-1 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300' onClick={() => setShow(true)}>
                            <FcSearch />
                        </div>
                    </OverlayTrigger>

                    <div>
                    <input class="bg-white border-2 border-gray-200 rounded w-full px-5" id="inline-full-name" type="text" />
                    </div>
                </div>

            </div>

           
          </form>
        </div>

      </div>

      <div className='border-2 border-gray'>
        <div className="border-2 border-gray bg-[#0b5394]">
            <p className='m-1 text-white'>Banker</p>
        </div>

        <div className='m-2'>
         <form class="w-full max-w-lg ">
            <div class="flex items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        SWIFT
                    </label>
                </div>
                <div class="md:w-2/3 flex items-center space-x-1">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-20 py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                    <div className='border rounded sm:p-1'>
                        <FcSearch />
                    </div>
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Address 1
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Address 2
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Address 3
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6 ml-12">
                <div class="md:w-1/3 mr-10">
                    <label class="block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Country
                    </label>
                </div>

                <div className='flex space-x-1 mr-6'>
                    <div>
                        <input className='border rounded w-24' />
                    </div>

                    <OverlayTrigger trigger="click" placement="right" overlay={popover_country}>
                        <div className='border rounded sm:p-1 border rounded sm:p-1 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300' onClick={() => setShow(true)}>
                            <FcSearch />
                        </div>
                    </OverlayTrigger>

                    <div>
                    <input class="bg-white border-2 border-gray-200 rounded w-full px-5" id="inline-full-name" type="text" />
                        {/* <input className='border rounded w-94' disabled /> */}
                    </div>
                </div>

            </div>

           
          </form>
        </div>

      </div>
    </div>
  )
}

export default FirstForm
