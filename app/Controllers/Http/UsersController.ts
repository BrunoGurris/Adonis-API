import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UsersService from 'App/Services/UsersService'

export default class UsersController {

  private usersService = new UsersService()


  public async get({ response }: HttpContextContract) {
    const users = await User.all()

    response.status(200).send({
      users: users
    })
  }


  public async store({ request, response }: HttpContextContract) {
    try {
      const body = request.body()
      return this.usersService.store(response, body)
    }
    catch (e) {
      return {
        status: 'error',
        message: 'Não foi possível criar o usuário!'
      }
    }
  }

}
