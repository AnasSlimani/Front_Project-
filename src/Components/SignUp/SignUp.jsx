import React from 'react'
import "./SignUp.css";

export default function SignUp() {



    return (
        <section className='sctlogin'>
            <div className="maine">
                <input className='inpute' type="checkbox" id="chk" aria-hidden="true" />

                <div className="signupe">
                    <form>
                        <label htmlFor="chk" aria-hidden="true" className='labele' >
                            Sign up
                        </label>
                        <input className='inpute' type="text" name="txt" placeholder="User name" required />
                        <input className='inpute' type="email" name="email" placeholder="Email" required />
                        <input className='inpute' type="password" name="pswd" placeholder="Password" required />
                        <button className='btnlogin' >Sign up</button>
                    </form>
                </div>

                <div className="logine">
                    <form>
                        <label htmlFor="chk" aria-hidden="true" className='labele' >
                            Login
                        </label>
                        <input className='inpute' type="email" name="email" placeholder="Email" required />
                        <input className='inpute' type="password" name="pswd" placeholder="Password" required />
                        <button className='btnlogin' >Log in</button>
                    </form>
                </div>
            </div>
        </section>
    )
}