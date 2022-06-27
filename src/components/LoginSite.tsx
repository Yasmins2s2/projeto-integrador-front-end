import { Link } from "react-router-dom";
import "./LoginSite.css"
import "./Cadastrar.css"
import PaginaComum from "./PaginaComum";

const LoginSite = function(){
    return(
        <PaginaComum>
             <div className="main-login">
                <div className="left-login">
                    <h1>AppFel <br/> <br/>Faça seu login  <br/> e venha estilizar com a gente.</h1>
                </div>
            <div className="rigth-login">
                <div className="card-login">
                        <h1>Login</h1>
                    <div className="textfield">
                        
                    </div>
                    <div className="textfield">
                        <label htmlFor="text"> E-mail</label>
                        <input type="e-mail" name="E-mail" placeholder="E-mail"/>
                    </div>
                    <div className="textfield">
                        <label htmlFor="senha"> Senha</label>
                        <input type="password" name="senha" placeholder="Senha"/>
                    </div> 
                    <button className="btn-login"> Entrar</button>
                    <Link to="/cadastrar" className="btn-cadastrologin">Cadastrar</Link>
                </div>
            </div>
        </div>
        </PaginaComum>
    );
};
export default LoginSite;

