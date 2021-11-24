import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Card = (props) => {
  const task = props.data;
  const prazo = task.prazo.slice(0, 10);

  return (
    <Link to={`/view/${task._id}`} className="col" id="cards">
      <div className="card border-info mb-3">
        <div className="card-body">
          <h5 className="card-title">{task.titulo}</h5>
          <p className="card-text">{task.descricao}</p>
          <span className="badge bg-primary">{task.prioridade}</span>
          <p className="card-text">Prazo:</p>
          <span className="badge bg-danger">{prazo}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
