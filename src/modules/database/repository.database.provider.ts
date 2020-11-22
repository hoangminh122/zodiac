import { Zodiacs } from "src/entities/zodiac";

export const zodiacRepository = {
    provide: 'ZodiacsRepository',
    useValue: Zodiacs
}