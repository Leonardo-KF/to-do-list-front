import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../api/api";

const Edit = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    titulo: "",
    descricao: "",
    prioridade: "",
    status: "",
    prazo: "",
  });

  const { id } = useParams();

  const getTaskById = async () => {
    const req = await Api.fetchGetById(id);

    const Task = await req.json();

    setTask(Task);
  };

  useEffect(() => {
    getTaskById();
  }, []);

  const fieldsChange = (event) => {
    const taskEdit = { ...task };

    taskEdit[event.target.name] = event.target.value;

    setTask(taskEdit);
  };

  const FormSubmit = async (event) => {
    event.preventDefault();
    const req = await Api.fetchPut(task, id);

    const data = await req.json();

    alert(data.message);

    navigate(`/view/${id}`);
  };

  const Cancel = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Task Edition</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={FormSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input
                    id="titulo"
                    className="form-control"
                    type="text"
                    name="titulo"
                    placeholder="Title"
                    value={task.titulo}
                    onChange={fieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Description:</label>
                  <input
                    id="descricao"
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    onChange={fieldsChange}
                    value={task.descricao}
                    name="descricao"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="priority" className="form-label">
                    Priority:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Priority"
                    name="prioridade"
                    defaultValue="hight"
                    onChange={fieldsChange}
                  >
                    <option value="hight">Hight</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="status" className="form-label">
                    Status:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Status"
                    name="status"
                    defaultValue="do"
                    onChange={fieldsChange}
                  >
                    <option value="do">Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="Deadline" className="form-label">
                    Deadline
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="prazo"
                    value={task.prazo.slice(0, 10)}
                    onChange={fieldsChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-4 d-flex align-items-end justify-content-around">
              <button type="submit" className="btn btn-success">
                Enviar
              </button>
              <button type="button" onClick={Cancel} className="btn btn-danger">
                Voltar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
