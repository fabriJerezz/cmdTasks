export const getProjectsList = async (req, res) => {
  try {
    const projects = await getAllProjects();
    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

export const getProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const projectData = await getProjectData(projectId);
    res.status(200).send(projectData);
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

export const updateProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const newProjectData = req.body;
    await updateProjectData(newProjectData, projectId);
    res.status(200).send('Project successfully updated!');
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

export const newProject = async (req, res) => {
  try {
    const projectData = req.body;
    await createProject(projectData);
    res.status(200).send('Project successfully added!');
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

export const deleteProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    await deleteProjectData(projectId);
    res.status(200).send('Project successfully deleted!');
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

//Hacer controllers para filtrar lo que se muestra y otras cosas
