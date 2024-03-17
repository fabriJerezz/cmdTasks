import express from 'express';


const showProyectList = async (req, res) => {
  try {
    const proyects = await getAllProyects();
    res.status(200).send(proyects);
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

const showProyectData = async (req, res) => {
  try {
    const proyectId = req.params.proyectId;
    const proyectData = await getProyectData(proyectId);
    res.status(200).send(proyectData);
  } catch (error) {
    res.status(500).send('An error has occured', error);
  }
};

const modifyProyectData = async (req, res) => {
  try {
    const proyectId = req.params.proyectId;
    const newProyectData = req.body;
    await updateProyectData(newProyectData, proyectId);
    res.status(200).send('Proyect successfully updated!');
  } catch (error) {
    res.status(500).send('An error has occured', error);
  }
};

const addProyect = async (req, res) => {
  try {
    const proyectData = req.body;
    await createProyect(proyectData);
    res.status(200).send('Proyect successfully created!');
  } catch (error) {
    res.status(500).send('An error has occured', error);
  }
};

const deleteProyect = async (req, res) => {
  try {
    const proyectId = req.params.proyectId;
    await deleteProyect(proyectId);
    res.status(200).send('Proyect successfully deleted!');
  } catch (error) {
    res.status(500).send('An error has occured', error);
  }
};


//Hacer controllers para filtrar lo que se muestra y otras cosas 