import "./Cadastrar.css"
const Cadastrar = function(){
    return(
        <>     
        <div className="main-cadastrar">
            <div className="left-cadastro">
                <h1>AppFel <br/> <br/>Faça seu login  <br/> e venha estilizar com a gente.</h1>
            </div>
        </div>

        <div className="rigth-cadastro">
            <div className="card-cadastro">
                <h1>Cadastrar-se</h1>
                <div className="textfield">
                    <label htmlFor="usuario"> Nome de usuario</label>
                    <input type="text" name="usuario" placeholder="Usuário"/>
                </div>
                <div className="textfield">
                    <label htmlFor="text"> E-mail</label>
                    <input type="e-mail" name="E-mail" placeholder="E-mail"/>
                </div>
                <div className="textfield">
                    <label htmlFor="senha"> Senha</label>
                    <input type="password" name="senha" placeholder="Senha"/>
                </div> 
            
                <div className="textfield">
                    <label htmlFor="date"> Data de Nascimento</label>
                    <input type="date" name="Data" placeholder="Data"/>
                </div>
                <div className="textfield">
                    <label htmlFor="address"> CEP</label>
                    <input type="address" name="CEP" placeholder="CEP"/>
                </div>
               
                <button className="btn-cadastrar"> Cadastrar</button>
            </div>
        </div>
    
        </>

        
        
        
    );

};
export default Cadastrar;
