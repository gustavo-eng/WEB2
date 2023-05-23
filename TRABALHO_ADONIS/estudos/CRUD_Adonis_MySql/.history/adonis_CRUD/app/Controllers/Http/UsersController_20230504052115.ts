// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";

export default class UsersController {
  public async index({response}) {
    const user  = User.all()
    response.status(200).json(user)
  }

  public async create() {}

  public async store({response, request}) {
    const user  = User.create(request.only(['name', 'email', 'password']))
    response.status(200).json(user)
    
  }

  public async show() {}

  public async edit() {}

  public async update() {}

  public async delete() {}
}
