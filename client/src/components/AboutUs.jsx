import React from 'react'
import logo from '../../images/logo.png'

function AboutUs() {
  return (
    <div className='min-h-screen gradient-bg-aboutus text-white height-100vh'>
      <div className='flex w-full justify-center items-center'>
      <img src = {logo} alt = "logo" className = "w-40 align-content: center"  />
      </div>
      <div className='align-content: space-evenly'>
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
crypto enthusiasts behind this
</p><br/>

we are a team of 3 computer science engineers from PES university who are crypto enthusiasts and have been exploring a lot in this domain past a few years. 
<br/><br/>
rakshika - (github link)<br/>
rehan - (github link)<br/>
praneeth - (github link)<br/>

    </div>
  )
}

export default AboutUs;