export const newTeam = async (req, res) => {
  try {
    const teamData = req.body;
    await createTeam(teamData);
    res.status(200).send('Team successfully created!');
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

export const updateTeam = async (req, res) => {
  try {
    const newTeamData = req.body;
    await updateTeamData(newTeamData);
    res.status(200).send('Team successfully updated!');
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

export const deleteTeam = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    await deleteTeamData(teamId);
    res.status(200).send('Team successfully deleted!');
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

export const getTeam = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const teamData = await getTeamData(teamId);
    res.status(200).send(teamData);
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

export const getTeamsList = async (req, res) => {
  try {
    const teams = await getAllTeams();
    res.status(200).send(teams);
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

export const getTeamMember = async (req, res) => {
  try { } catch (error) {}
}

//Hacer controllers para filtrar lo que se muestra y otras cosas
