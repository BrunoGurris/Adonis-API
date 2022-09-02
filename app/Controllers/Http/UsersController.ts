import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersService from 'App/Services/UsersService'
const usersService = new UsersService

export default class UsersController {

  // private usersService = new UsersService

  // constructor (usersService: UsersService) {
  //   this.usersService = usersService
  // }

  public async get() {
    return {
      data: 'asdasd'
    }
  }

  public async store({ request, response }: HttpContextContract) {
    return usersService.store(request, response)



    // response.status(201)
    // return {
    //   status: 'success',
    //   user: user
    // }
  }

}
