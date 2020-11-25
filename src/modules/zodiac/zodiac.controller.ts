import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ZodiacService } from "./zodiac.service";

@ApiTags('zodiac')
@Controller('zodiac')
export class ZodiacController {
    constructor(
        private zodiacService: ZodiacService
    ) { }

    @Get()
    @ApiOperation({ summary: 'All zodiac' })
    getAllZodiac() {
        return this.zodiacService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find By Id' })
    getZodiacById(@Param('id') id: number) {
        return this.zodiacService.findZodiacById(id);
    }

    @Get('/get-infor-zodiac/:name')
    @ApiOperation({ summary: 'Find By Name' })
    getZodiacByName(@Param('name') name: string) {
        return this.zodiacService.findZodiacByName(name);
    }

    @Get('/get-name-zodiac/:dateOfBirth')
    @ApiOperation({ summary: 'GetNameZodiac' })
    getNameZodiac(@Param('dateOfBirth') date: Date) {
        return this.zodiacService.getNameZodiac(date);
    }

}