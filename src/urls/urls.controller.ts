import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { UrlsService } from './urls.service';

@Controller()
export class UrlsController {
  constructor(private readonly urls: UrlsService) {}

  @Post('urls')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateUrlDto) {
    return this.urls.create(dto);
  }

  @Get('urls/:code/stats')
  stats(@Param('code') code: string) {
    return this.urls.stats(code);
  }

  @Get(':code')
  @Redirect()
  async redirect(@Param('code') code: string) {
    const url = await this.urls.resolve(code);
    return { url: url.originalUrl, statusCode: HttpStatus.FOUND };
  }
}
