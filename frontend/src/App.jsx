import { useState } from "react";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("Respuesta...");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await axios.post("http://localhost:3002/api/request", {
      query: input,
    });
    setResponse(response.data);
    setLoading(false);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <section>
      <h1>Chat con API de Cohere</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="¿Qué quieres saber?"
          type="text"
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {loading ? <p>Esta en carga...</p> : <p>{response}</p>}
    </section>
  );
};

export { App };
