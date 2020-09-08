import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CarsService {

  async find(query = {}) {
    return await dbContext.Cars.find(query)
  }
  async getById(id) {
    let data = await dbContext.Cars.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async create(body) {
    return await dbContext.Cars.create(body)
  }
  async edit(body) {
    let update = await dbContext.Cars.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid Id")
    }
    return update
  }

  async bid(body) {
    let car = await this.getById(body.id)
    // @ts-ignore
    if (body.price < car.price) {
      throw new BadRequest("price must only go up")
    }
    // @ts-ignore
    car.price = body.price
    await car.save()
    return car
  }

  async delete(id) {
    let success = await dbContext.Cars.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid Id")
    }
  }

}

export const carsService = new CarsService();