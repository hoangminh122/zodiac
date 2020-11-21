import { Sequelize } from "sequelize-typescript";
import { DayOfZodiac } from "src/entities/DayOfZodiac";
import { MonthOfZodiac } from "src/entities/MonthOfZodiacs";
import { Zodiacs } from "src/entities/zodiac";
import { databaseConfig } from "src/shared/config/interfaces/database";


export const databaseProvider = {
  provide: 'SequelizeInstance',
  useFactory: async () => {
    let config;
    switch (process.env.NODE_ENV) {
      case 'prod':
      case 'production':
        config = databaseConfig.production;
        break;
      case 'dev':
      case 'development':
        config = databaseConfig.development;
        break;
      default:
        config = databaseConfig.development;
    }

    const sequelize = new Sequelize({...config });
    sequelize.addModels([Zodiacs,MonthOfZodiac,DayOfZodiac]);
    await sequelize.sync({ force: true });
    return sequelize;
  },
};
