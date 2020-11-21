import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('zodiac')
@Controller('zodiac')
export class ZodiacController {
    constructor(){

    }

    @Get()
    @ApiOperation({summary:'TEST'})
    getTest() :string{
        return "sdfhgsdf";
    }

}