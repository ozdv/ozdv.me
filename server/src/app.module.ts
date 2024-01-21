import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BibleModule } from './bible/bible.module';
import { MassModule } from './mass/mass.module';
import { OfficeModule } from './office/office.module';
import { PrayersModule } from './prayers/prayers.module';
import { UsersModule } from './users/users.module';

// The root module of the application.

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
    }),
    UsersModule,
    BibleModule,
    MassModule,
    PrayersModule,
    OfficeModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
