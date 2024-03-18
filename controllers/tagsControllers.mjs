export const getTagsList = async (req, res) => {
  try {
    const tags = await getAllTags();
    res.status(200).send(tags);
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

export const getTag = async (req, res) => {
  try {
    const tagId = req.params.tagId;
    const tagData = await getTagData(tagId);
    res.status(200).send(tagData);
  } catch (error) {
    res.status(500).send('An error has occurred', error);
  }
};

//Hacer controllers para filtrar lo que se muestra y otras cosas
