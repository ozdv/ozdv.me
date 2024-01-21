import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BibleModule } from './bible/bible.module';
import { MassModule } from './mass/mass.module';
import { PrayersModule } from './prayers/prayers.module';

@Module({
  imports: [UsersModule, BibleModule, MassModule, PrayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
