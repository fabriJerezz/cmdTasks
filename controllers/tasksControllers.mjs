import express from 'express';

const app = express();

const showTaskList = async (req, res) => {
  try {
    const tasks = await  getAllTasks();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send("An error has occured", error)
  }
};

const showProyectTasksList = async (req, res) => {
    try{
        const proyectId = req.params.proyectId;
        const tasks = await getAllTasks(proyectId);
        res.status.send(tasks);
    } catch (error) {
        res.status(500).send('An error has occured', error);
    }
}

const showTaskData = async (req, res) => {
  try {

  } catch {}
};

const modifyTaskData = async (req, res) => {
  try {
  } catch {}
};

const deleteTask = async (req, res) => {
  try {
  } catch {}
};


//Hacer controllers para filtrar lo que se muestra y otras cosas 