import React from "react";
import axios from "axios";
import { useState } from "react";
function Add({ get }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [inputMovies, setInputMovies] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id,
      isim: name,
      filmler: inputMovies.split(","),
    };

    try {
      await axios.post("http://localhost:5000/aktorler", data);
      alert("Veri Eklendi");
      get();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          placeholder="id"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="movies"
          value={inputMovies}
          onChange={(e) => setInputMovies(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Add;
