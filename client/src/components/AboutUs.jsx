import React from 'react'
import logo from '../../images/logo.png'
import { FaGithub } from "react-icons/fa";

function AboutUs() {
  return (
    <div className='min-h-screen gradient-bg-aboutus text-white height-100vh'>
      <div className='flex w-full justify-center items-center'>
      <img src = {logo} alt = "logo" className = "w-40 align-content: center"  />
      </div>
      <div className='pl-20 justify-center pr-20'>
      <div className='className="text-white text-3xl text-center my-2"'>
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
    </div>
  )
}

export default AboutUs;