// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";

export default class UsersController {
  public async index({response}) {
    const user  = await User.all()
    response.status(200).json(user)
  }

  public async create() {}

  public async store({response, request}) {
    const user  = await User.create(request.only(['name', 'email', 'password']))
    response.status(200).json(user)
    
  }

  public async show() {}

  public async edit() {}

  public async update({params, request, response}) {
    const user = await User.find(params.id)
    if (user) {
      user.merge(request.only(['name', 'email', 'password']))
      user.save()
    }

    response.status(200).json(user)
  }

  public async delete({params, response}) {
    const user = await User.find(params.id)
    if(user) {
      user.delete()
    }
    response.status(200).json(user)
  }
}








