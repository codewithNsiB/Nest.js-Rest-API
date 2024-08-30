import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { NsseyModule } from './nssey/nssey.module';

@Module({
  imports: [NinjasModule, NsseyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
