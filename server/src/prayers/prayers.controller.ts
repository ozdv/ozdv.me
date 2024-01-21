import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrayersService } from './prayers.service';
import { CreatePrayerDto } from './dto/create-prayer.dto';
import { UpdatePrayerDto } from './dto/update-prayer.dto';

@Controller('prayers')
export class PrayersController {
  constructor(private readonly prayersService: PrayersService) {}

  @Post()
  create(@Body() createPrayerDto: CreatePrayerDto) {
    return this.prayersService.create(createPrayerDto);
  }

  @Get()
  findAll() {
    return this.prayersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prayersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrayerDto: UpdatePrayerDto) {
    return this.prayersService.update(+id, updatePrayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prayersService.remove(+id);
  }
}
