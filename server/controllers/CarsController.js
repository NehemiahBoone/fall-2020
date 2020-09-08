import { carsService } from "../services/CarsService";
import BaseController from "../utils/BaseController";

export class CarsController extends BaseController {
  constructor() {
    super("api/cars");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .put("/:id/bid", this.bid)
      .delete("/:id", this.delete)

  }
  async getAll(req, res, next) {
    try {
      let data = await carsService.find(req.query);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await carsService.getById(req.params.id);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await carsService.create(req.body);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await carsService.edit(req.body);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async bid(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await carsService.bid(req.body);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await carsService.delete(req.params.id);
      res.send("Successfully deleted")
    } catch (error) {
      next(error)
    }
  }
}