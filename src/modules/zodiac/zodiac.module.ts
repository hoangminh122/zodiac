import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { zodiacRepository } from "../database/repository.database.provider";
import { ZodiacController } from "./zodiac.controller";
import { ZodiacService } from "./zodiac.service";


@Module({
    imports: [DatabaseModule],
    providers: [
        ZodiacService,
        zodiacRepository
    ],
    controllers: [ZodiacController],
    exports: []
})
export class ZodiacModule {

}