import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class JobsService {

  async find(query = {}) {
    return await dbContext.Jobs.find(query)
  }
  async getById(id) {
    let data = await dbContext.Jobs.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async create(body) {
    return await dbContext.Jobs.create(body)
  }
  async edit(body) {
    let update = await dbContext.Jobs.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid Id")
    }
    return update
  }
  async delete(id) {
    let success = await dbContext.Jobs.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid Id")
    }
  }

}

export const jobsService = new JobsService();