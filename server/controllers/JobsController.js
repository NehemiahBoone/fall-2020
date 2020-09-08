import { jobsService } from "../services/JobsService";
import BaseController from "../utils/BaseController";

export class JobsController extends BaseController {
  constructor() {
    super("api/jobs");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)

  }
  async getAll(req, res, next) {
    try {
      let data = await jobsService.find(req.query);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await jobsService.getById(req.params.id);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await jobsService.create(req.body);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await jobsService.edit(req.body);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await jobsService.delete(req.params.id);
      res.send("Successfully deleted")
    } catch (error) {
      next(error)
    }
  }
}