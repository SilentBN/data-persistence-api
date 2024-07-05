// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
  async getAll() {
    const projects = await db("projects");
    return projects.map((project) => ({
      ...project,
      project_completed: Boolean(project.project_completed),
    }));
  },
  async create(project) {
    const [newProject] = await db("projects").insert(project, [
      "project_id",
      "project_name",
      "project_description",
      "project_completed",
    ]);
    return {
      ...newProject,
      project_completed: Boolean(newProject.project_completed),
    };
  },
};
