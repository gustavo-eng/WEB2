import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Time from 'App/Models/Time'

export default class TimesController {

    public async store({ request, response }: HttpContextContract) {

        const body = request.body()

        const time = await Time.create(body)

        response.status(201)

        return {
            message: "Time criado com sucesso",
            data: time,
        }

    }

    public async index() {

        const times = await Time.all()

        return {
            data: times
        }
    }

    public async show({ params }: HttpContextContract) {

        const time = await Time.findOrFail(params.id)

        return {
            data: time,
        }

    }

    public async destroy({ params }: HttpContextContract) {

        const time = await Time.findOrFail(params.id)

        await time.delete()

        return {
            message: "time deletado com sucesso",
            data: time,
        }

    }

    public async update({ params, request }: HttpContextContract) {

        const body = request.body()

        const time = await Time.findOrFail(params.id)

        time.nome = body.nome
        time.estado = body.estado
        time.cidade = body.cidade

        await time.save()

        return {
            message: "Time atualizado com sucesso",
            data: time
        }

    }

}
