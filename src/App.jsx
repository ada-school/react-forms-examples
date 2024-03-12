import "./App.css";

function App() {
  
  return (
    <>
      <h1>Ada Form</h1>
      <form>
        <div className="twoColumns">
          <div>
            <label htmlFor="firstName">Primer nombre:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="secondName">Segundo nombre:</label>
            <input type="text" id="secondName" name="secondName" />
          </div>
        </div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <div className="twoColumns">
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div>
            <label htmlFor="confirm">Confirmar Password:</label>
            <input type="password" id="confirm" name="confirm" />
          </div>
        </div>
        <label htmlFor="select">Genero:</label>
        <select name="select" id="select">
          <option value="">Seleccionar</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
        <label htmlFor="adult">
          <input type="checkbox" name="adult" id="adult" />
          ¿Soy mayor de edad?
        </label>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default App;
