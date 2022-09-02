import User from 'App/Models/User'
import UsersRepository from 'App/Repositories/UsersRepository'

export default class UsersService {

  private usersRepository = new UsersRepository()

  public async store(response, body) {

    try {
      /* Verifica se o email já esta cadastrado */
      if (await User.query().where('email', body.email).first()) {
        return response.status(400).send({
          status: 'error',
          message: 'Este email já esta cadastrado!',
          where: 'email'
        })
      }
      /* */

      /* Verifica se o nome do usuario */
      if (body.name.length < 5) {
        return response.status(400).send({
          status: 'error',
          message: 'O nome do usuário deve ter no minimo 5 digitos!',
          where: 'name'
        })
      }
      /* */

      /* Verifica o numero de celular */
      if (!body.cellphone) {
        return response.status(400).send({
          status: 'error',
          message: 'Informe o numero de celular!',
          where: 'cellphone'
        })
      }
      /* */

      /* Verifica a data de nascimento */
      if (new Date() < new Date(body.birth)) {
        return response.status(400).send({
          status: 'error',
          message: 'A data de nascimento deve ser anterior a data de hoje!',
          where: 'birth'
        })
      }
      /* */

      return this.usersRepository.store(response, body)
    }
    catch (e) {
      return response.status(400).send({
        status: 'error',
        message: 'Não foi possível criar o usuário!'
      })
    }
  }

}
