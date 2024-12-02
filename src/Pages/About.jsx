import React from 'react';
import Navbar from '../Components/Navbar';


function About() {

    return (
        <>
            <Navbar />
            
            <br />
    <br />
    <br />
    <div className="personal-top">
    <h1>Your goals</h1>
    </div>
             <p className='pt-2 leading-relaxed'>
                    
                Writing Buddy is here to help you with your day-to-day writing!
          </p>
          <br/>
          <p>
            Here is a list of things WB can help you with:
          </p>
          <ul>
            <li>- Creating word-based goals</li>
            <li>- Notes and ideas for you to create and delete as you go</li>
            <li>- Randomly generated prompts to get you started</li>
            <li>- Need help in creating a character? Try out our character page to get some inspiration</li>
          </ul>
          
        </>
    )

}

export default About;