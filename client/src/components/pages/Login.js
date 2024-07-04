const Login =() =>{
    return (
         <div className="container">
            <form className="col">
                <h2>
                    LOGIN
                </h2>
                <div className="col">
                    <label htmlFor="username" >User Name :</label>
                    <input type="text" id="username" name="username" required/>

                </div>
                <div className="col">
                    <label htmlFor="password" >Password :</label>
                    <input type="password" id="password" name="password" required/>

                </div>
                <button type="submit">login</button>
            </form>

         </div>
    );
};

export default Login;