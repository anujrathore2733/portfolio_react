import React from "react";



const Contactme = () => {



    return (
        <div className="cntdiv">


            <div className="contactme">
                <h1 className="text-center queryhead">Query form will we live soon.</h1>
                <form className="form-group w-100">
                    <input className="form-control my-2"
                        type='text'
                        placeholder="Name"
                        required>
                    </input>
                    <input className="form-control"
                        type="email"
                        placeholder="Email"
                        required>
                    </input>
                    <textarea className="form-control my-2"
                        rows='5'
                        placeholder="Message"
                        required>
                    </textarea>
                    <button className="btn btn-sm sendbtn" disabled>Send</button>
                    <h4 className="text-center text-light mt-5"><i className="fa fa-whatsapp" style={{fontSize:'25px'}}></i> 8699558944</h4>
                    <h4 className="text-center text-light"><i className="fa fa-phone" style={{fontSize:'25px'}}></i> 7289085122</h4>
                    <h4 className="text-center text-light"><i className="fa fa-envelope-o" style={{fontSize:'25px'}}></i> anujrathore2901@gmail.com</h4>
                </form>
            </div>
        </div>
    )
}

export default Contactme