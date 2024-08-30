import { BeltGuard } from './../belt/belt.guard';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { Controller, Get, Post, Put,Delete, Param, Query, Body, NotFoundException, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { NinjasModule } from './ninjas.module';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService){}
  
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'moon') {
    return this.ninjasService.getNinjas(weapon)
  }

   
  @Get(':id')
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjasService.getNinja(id)
    } catch (error) {
      throw new NotFoundException();
      
    }
  
  }

    @Post()
    @UseGuards(BeltGuard)
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.CreateNinja(createNinjaDto);
  }

@Put(':id')
updateNinja(@Param('id') id: string,@Body() updateNinjaDto:UpdateNinjaDto) {
  return this.ninjasService.updateNinja(+id, updateNinjaDto)

}

@Delete (':id')
removeNinja(@Param('id') id : string){
  return this.ninjasService.removeNinja(+id)
}

}
