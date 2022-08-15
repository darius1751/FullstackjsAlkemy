export const Register = ()=>{
    return (
        <div>
            <div className="container">
                <form className="form">
                    <label htmlFor="name">Nombre completo:</label>
                    <input type='text' name='name' id='name' placeholder="Ingrese su nombre"/>
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type='email' name='email' id='email' placeholder="Ingrese su email"/>
                    <br/>
                    <label htmlFor="birthday">Fecha de nacimiento:</label>
                    <input type='date' name='birthday' id='birthday'/>
                    <input type='password' name='password' id='password' placeholder="Cree una contraseña"/>
                    <br/>
                    <input type='email' name='email' id='email' placeholder="Confirma tu contraseña"/>
                    <br/>

                </form>
            </div>
        </div>
    )
}