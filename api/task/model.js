// build your `Task` model here
const db = require("../../data/db-config");

module.exports = {
  async getAll() {
    const tasks = await db("tasks as t")
      .join("projects as p", "t.project_id", "p.project_id")
      .select("t.*", "p.project_name", "p.project_description");
    return tasks.map((task) => ({
      ...task,
      task_completed: Boolean(task.task_completed),
    }));
  },
  async create(task) {
    const [newTask] = await db("tasks").insert(task, [
      "task_id",
      "task_description",
      "task_notes",
      "task_completed",
      "project_id",
    ]);
    return { ...newTask, task_completed: Boolean(newTask.task_completed) };
  },
};
