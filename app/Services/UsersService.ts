import User from 'App/Models/User'

export default class UsersService {


  public async store(request, response) {

    const body = request.body()
    const user = User.create(body)

    response.status(201)
    return {
      status: 'success',
      user: user
    }
  }

}
