import React from "react";
import Api from "../api/api";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  const cancel = () => {
    navigate("/");
  };

  const FormSubmit = async (event) => {
    event.preventDefault();

    const titulo = event.target.titulo.value;
    const descricao = event.target.descricao.value;
    const prioridade = event.target.prioridade.value;
    const status = event.target.status.value;
    const prazo = event.target.prazo.value;
    console.log(prazo);

    const task = {
      titulo,
      descricao,
      prioridade,
      status,
      prazo,
    };

    const req = await Api.fetchPost(task);

    if (req.status === 500) {
      alert("Erro no servidor");
    }

    const result = await req.json();

    if (result.error) {
      alert("ERRO 404, tente novamente mais tarde");
    } else {
      alert(result.message);
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center h2">Add Task</h2>
      <form className="row g-3" onSubmit={FormSubmit}>
        <div className="col-12">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="titulo"
          />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="descricao"
          />
        </div>
        <div className="col-12">
          <label htmlFor="priority" className="form-label">
            Priority:
          </label>
          <select
            className="form-select"
            aria-label="Priority"
            name="prioridade"
            defaultValue="hight"
          >
            <option value="hight">Hight</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="status" className="form-label">
            Status:
          </label>
          <select
            className="form-select"
            aria-label="Status"
            name="status"
            defaultValue="do"
          >
            <option value="do">Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="Deadline" className="form-label">
            Deadline
          </label>
          <input type="date" className="form-control" name="prazo" />
        </div>
        <button type="submit" className="btn btn-success">
          Create
        </button>
        <button type="button" className="btn btn-danger" onClick={cancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Add;
