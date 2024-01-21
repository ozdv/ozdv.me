import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BibleModule } from './bible/bible.module';
import { MassModule } from './mass/mass.module';
import { OfficeModule } from './office/office.module';
import { PrayersModule } from './prayers/prayers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

// The root module of the application.

@Module({
  imports: [UsersModule, BibleModule, MassModule, PrayersModule, OfficeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
