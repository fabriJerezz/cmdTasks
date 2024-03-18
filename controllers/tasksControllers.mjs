export const getTasksList = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send('An error has occured', error);
  }
};

// export const getProyectTasksList = async (req, res) => {
//   try {
//     const proyectId = req.params.proyectId;
//     const tasks = await getAllTasks(proyectId);
//     res.status(200).send(tasks);
//   } catch (error) {
//     res.status(500).send('An error has occured', error);
//   }
// };

export const getTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const taskData = await getTaskData(taskId);
    res.status(200).send(taskData);
  } catch (error) {
    res.status(500).send('An error has occured', error);
  }
};

export const newTask = async (req, res) => {
  try {
    const taskData = req.body;
    await createTask(taskData);
    res.status(200).send('Task successfully added!');
  } catch (error) {}
};

export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const newTaskData = req.body;
    await updateTaskData(newTaskData, taskId);
    res.status(200).send('Task successfully updated!');
  } catch (error) {
    res.status(500).send('An error has occured', error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    await deleteTaskData(taskId);
    res.status(200).send('Task successfully deleted!');
  } catch (error) {
    res.status(500).send('An error has occured', error);
  }
};

//Hacer controllers para filtrar lo que se muestra y otras cosas
