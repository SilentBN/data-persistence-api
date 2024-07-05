// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports = {
  async getAll() {
    return db("resources");
  },
  async create(resource) {
    const [newResource] = await db("resources").insert(resource, [
      "resource_id",
      "resource_name",
      "resource_description",
    ]);
    return newResource;
  },
};
