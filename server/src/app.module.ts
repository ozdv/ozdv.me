import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BibleModule } from './bible/bible.module';

@Module({
  imports: [UsersModule, BibleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
