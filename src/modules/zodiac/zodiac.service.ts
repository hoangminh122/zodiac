import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { async } from "rxjs";
import { Zodiacs } from "src/entities/zodiac";


@Injectable()
export class ZodiacService {
    constructor(
        @InjectModel(Zodiacs)
        private zodiacModel: typeof Zodiacs
    ) { }

    async findAll() {
        return this.zodiacModel.findAll();

    }

    async findZodiacById(id) {
        return this.zodiacModel.findOne({
            where: {
                id
            }
        })
    }

    async findZodiacByName(name) {
        return this.zodiacModel.findOne({
            where: {
                code:name
            }
        })
    }
}