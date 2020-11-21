import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { ZodiacModule } from './modules/zodiac/zodiac.module';

@Module({
  imports: [DatabaseModule,ZodiacModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
