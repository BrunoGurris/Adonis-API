
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

export default class UsersRepository {

  public async store(response, body) {

    try {
      const user = await User.create({
        email: body.email,
        name: body.name,
        cellphone: body.cellphone,
        birth: body.birth,
      })

      response.status(201).send({
        status: 'success',
        message: 'Usuário criado com sucesso!',
        user: user
      })
    }
    catch (e) {
      return response.status(400).send({
        status: 'error',
        message: 'Não foi possível criar o usuário!'
      })
    }
  }

}
