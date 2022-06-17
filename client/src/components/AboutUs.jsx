import React from 'react'
import logo from '../../images/logo.png'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from './Footer';
function AboutUs() {
  return (
    <div className='min-h-screen gradient-bg-aboutus text-white height-100vh'>
      <div className='flex w-full justify-center items-center'>
      <img src = {logo} alt = "logo" className = "w-40 align-content: center"  />
      </div>
      <div className='pl-20 justify-center pr-20'>
      <div className='className="text-white text-3xl text-center my-2 text-gradient py-1"'>
        About Decage
      </div>


<p><br/>
This is an ethereum based web application where you can make borderless transactions. 
</p><br/>

<p>
For using this application,
<br/><br/>
-&gt; make sure metamask extension is installed on your browser<br/><br/>
-&gt; you have an account on meta mask <br/><br/>
-&gt; connect your wallet to decage platform to make transactions<br/><br/>
</p><br/>
<p>
Every transaction you make is added to the blockchain with a giphy corresponding to the keyword you give during the transaction
</p><br/>

<p>
Crypto enthusiasts behind this
</p><br/>

We are a team of 3 computer science engineers from PES university who are crypto enthusiasts and have been exploring a lot in this domain past a few years. 
<br/><br/>
<div className='flex w-full'>
Rakshika ---<a href='https://github.com/rakshikasprasad'> <FaGithub/></a><br/></div>
<div className='flex w-full'>
Rehan --- <a href='https://github.com/rehanganapathy'> <FaGithub/></a><br/></div>
<div className='flex w-full'>
Praneeth ---<a href='https://github.com/praneethk002'><FaGithub/></a><br/></div>
</div>
<div>
<br/>
<br/>
 <Link to='/'>
<div className='className="text-white text-2xl text-center my-2"'>
        Back to HomePage
      </div>
      </Link>
      <br/>
</div>
<div className="w-full flex md:justify-center justify-between items-center flex-col p-4">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      
      
    </div>

    <div className="flex justify-center items-center flex-col">
      <p className="text-white  text-center text-3xl">
      <div className="pl-5 flex items-center justify-center" >
        <img src={logo} alt="logo" className="w-35" />
      </div>
       Usher in the next leap of growth </p>
      
      <p className="text-white text-sm text-center font-medium mt-2">info@decage.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@decage2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
    </div>
   


  )
}

export default AboutUs;
