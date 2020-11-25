import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { async } from "rxjs";
import { Zodiacs } from "src/entities/zodiac";
import * as moment from 'moment'
import { ZODIAC_NAME } from "src/shared/enum/zodiac-name.enum";
import { nameZodiac } from "./logic/zodiac-name.repository";

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
        return await this.zodiacModel.findOne({
            where: {
                code: name
            }
        })
    }

    getNameZodiac(date) {
        //2020-11-25T08:58:31.110Z
        let dateFormat = new Date(date);
        let year = dateFormat.getFullYear() || 0;
        let day = dateFormat.getDate() || 0;
        let month = dateFormat.getMonth() + 1 || 0;
        return nameZodiac(day, month) || '';
    }
    async getInforNomalZodiac(date) {
        //2020-11-25T08:58:31.110Z
        let name = this.getNameZodiac(date) || '';
        console.log(await this.findZodiacByName(name))
        return await this.findZodiacByName(name) || '';
    }
}