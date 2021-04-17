import './Contact.css';

export default function Contact(){
    return(
        <div className='contact' id='contact'>
            <h2>Contact Us</h2>

            <input type="text" className="input" placeholder="Enter your Name" name="name" /> <br />
            <input type="text" className="input" placeholder="Enter your email" name="email" /> <br />
            <textarea className="input msg" placeholder="Message"></textarea><br />
            <button className="input submit" onClick = {() => window.location.assign('/')} >SEND</button>
            
        </div>
    );
}

 