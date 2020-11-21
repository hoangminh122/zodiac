import { Module } from "@nestjs/common";
import { ZodiacController } from "./zodiac.controller";
import { ZodiacService } from "./zodiac.service";


@Module({
    imports:[],
    providers:[ZodiacService],
    controllers:[ZodiacController],
    exports:[]
})
export class ZodiacModule {

}