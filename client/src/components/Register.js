const Register =() =>{
    return (
         <div className="container">
            <form className="col">
                <h2>
                    REGISTER
                </h2>
                <div className="col">
                    <label htmlFor="username" >User Name :</label>
                    <input type="text" id="username" name="username" required/>

               
                </div>
                <div className="col">
                    <label htmlFor="firstname" >First Name :</label>
                    <input type="text" id="firstname" name="firstname" required/>
                    </div>
                    <div className="col">
                    <label htmlFor="lastname" >Last Name :</label>
                    <input type="text" id="lastname" name="lastname" required/>

                </div>
                
                <div className="col">
                    <label htmlFor="email" >EMail :</label>
                    <input type="text" id="email" name="email" required/>

                </div>
               
                <div className="col">
                    <label htmlFor="password" >Password :</label>
                    <input type="password" id="password" name="password" required/>

                </div>
                <button type="submit">Register</button>
            </form>

         </div>
    );
};

export default Register;