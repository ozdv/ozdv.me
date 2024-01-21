import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BibleModule } from './bible/bible.module';
import { MassModule } from './mass/mass.module';
import { PrayersModule } from './prayers/prayers.module';
import { OfficeModule } from './office/office.module';

@Module({
  imports: [UsersModule, BibleModule, MassModule, PrayersModule, OfficeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
