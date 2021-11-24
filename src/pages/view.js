import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Api from "../api/api";

const View = () => {
  const [task, setTask] = useState({});

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const ModalOpen = () => setOpen(true);
  const ModalClose = () => setOpen(false);

  const { id } = useParams();

  const getTaskById = async () => {
    const req = await Api.fetchGetById(id);

    const Task = await req.json();

    setTask(Task);
  };

  const DelTask = async () => {
    const res = await Api.fecthDelete(id);
    const data = await res.json();

    if (data.message) {
      navigate("/");
    } else {
      alert("ERRO ao deletar do servidor!! Tente novamente mais tarde! ");
    }
  };

  useEffect(() => {
    getTaskById();
  }, []);

  if (task.prazo !== undefined) {
    var deadline = task.prazo.slice(0, 10);
    var creation = task.datac.slice(0, 10);
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-6">
          <div className="card my-5">
            <h2 className="text-center my-4">{task.titulo}</h2>
            <h2 className="text-center">
              <b>Description: </b>
              {task.descricao}
            </h2>
            <h2 className="text-center">
              <b>Priority: </b>
              {task.prioridade}
            </h2>
            <h2 className="text-center">
              <b>Status: </b>
              {task.status}
            </h2>
            <h2 className="text-center">
              <b>Deadline: </b>
              {deadline}
            </h2>
            <h2 className="text-center">
              <b>Creation Date: </b>
              {creation}
            </h2>
            <div className="btn-group mt-3 w-100">
              <Link to={`/edit/${task._id}`} className="btn btn-info">
                Edit
              </Link>
              <button className="btn btn-danger" onClick={ModalOpen}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={ModalClose} center showCloseIcon={false}>
        <h2 className="my-4">Do you really want to delete?</h2>
        <div className="d-flex w-50 mx-auto justify-content-around">
          <button className="btn btn-danger mr-2" onClick={ModalClose}>
            No
          </button>
          <button className="btn btn-success" onClick={DelTask}>
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default View;
