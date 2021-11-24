import React, { useState, useEffect } from "react";
import Card from "../card";
import Api from "../../../api/api";

const List = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const req = await Api.fetchGetAll();

    const data = await req.json();

    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  });

  return (
    <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
      {tasks.map((task) => (
        <Card data={task} key={task._id} />
      ))}
    </div>
  );
};

export default List;
