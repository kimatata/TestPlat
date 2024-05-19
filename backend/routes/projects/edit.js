const express = require('express');
const router = express.Router();
const defineProject = require('../../models/projects');
const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  const Project = defineProject(sequelize, DataTypes);

  router.put('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    const { name, detail } = req.body;
    try {
      const project = await Project.findByPk(projectId);
      if (!project) {
        return res.status(404).send('Project not found');
      }
      await project.update({
        name,
        detail,
      });
      res.json(project);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  return router;
};
