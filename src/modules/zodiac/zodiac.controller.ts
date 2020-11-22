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

}