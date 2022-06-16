
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import './UserForm.css'



const Form = () => {
  let newArticle = JSON.parse(localStorage.getItem("ARTICLES")) || [];
 const saveData=() =>{
      newArticle.push(data);
      localStorage.setItem("ARTICLES", JSON.stringify(newArticle));
    }

    const initialState = {
        titulo: "",
        fecha: "",
        noticia:"",
      };
  const [data, setData] = useState({
    titulo: "",
    fecha: "",
    noticia:"",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (e) => {
    if ( data.titulo.length < 3 ) {
      setMessage("El titulo debe ser mas largo");
      setBtnDisabled(true);

    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData()
    clearState();
    setMessage("formulario enviado con éxito");
    setTimeout(() => {
      navigate("/list");
    }, 4000);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <div>
      <input
        type="text"
        placeholder="titulo"
        onChange={handleInputChange}
        value={data.username}
        name="titulo"
      />
      </div>
      <div>
      <input
        type="date"
        placeholder="fecha"
        min={new Date().toISOString().split("T")[0]}
        onChange={handleInputChange}
        value={data.email}
        name="fecha"
      />
      </div>
      <div>
       <textarea name="text" cols='30' rows='10'
        placeholder="pon aquí tu texto"
        onChange={handleInputChange}
        value={data.text}
      />
      </div>
      <button type="submit" disabled={btnDisabled}>
        Enviar
      </button>
      {message}
      </div>
    </form>
  );
};


export default Form