import express from 'express';
import projectsRouter from './routes/projectsRoutes.mjs';
import tagsRouter from './routes/tagsRoutes.mjs';
import tasksRouter from './routes/tasksRoutes.mjs';
import teamsRouter from './routes/teamsRoutes.mjs';

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/proyects', projectsRouter);
app.use('/tags', tagsRouter);
app.use('/tasks', tasksRouter);
app.use('/teams', teamsRouter);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
