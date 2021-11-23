import React from 'react';
import './Contact.css';

function Contact() {
    return ( //creation of the form where the user can submit to me 
        <div className="form-container">
            <form action="action_page">
                <label for="first-name">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your first name.."/>

                <label for="last-name">Last Name</label>
                <input type="text" id="lname" name="lasttname" placeholder="Your last name.."/>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Message" styles="height:200px"></textarea>

                <input type="submit" value="Submit"/>
                
            </form>
        </div>
    )
}

export default Contact
