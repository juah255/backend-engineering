import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { nanoid } from 'nanoid';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Injectable()
export class UrlsService {
  private static readonly CODE_LENGTH = 7;
  private static readonly MAX_RETRIES = 5;

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUrlDto) {
    if (dto.customCode) {
      const exists = await this.prisma.url.findUnique({
        where: { shortCode: dto.customCode },
      });
      if (exists) {
        throw new ConflictException(`shortCode "${dto.customCode}" is taken`);
      }
      return this.prisma.url.create({
        data: { shortCode: dto.customCode, originalUrl: dto.originalUrl },
      });
    }

    for (let attempt = 0; attempt < UrlsService.MAX_RETRIES; attempt++) {
      const shortCode = nanoid(UrlsService.CODE_LENGTH);
      try {
        return await this.prisma.url.create({
          data: { shortCode, originalUrl: dto.originalUrl },
        });
      } catch (err: unknown) {
        if (this.isUniqueViolation(err)) continue;
        throw err;
      }
    }
    throw new ConflictException('Could not generate a unique short code');
  }

  async resolve(shortCode: string) {
    const url = await this.prisma.url.update({
      where: { shortCode },
      data: { clicks: { increment: 1 } },
    }).catch((err: unknown) => {
      if (this.isNotFound(err)) {
        throw new NotFoundException(`shortCode "${shortCode}" not found`);
      }
      throw err;
    });
    return url;
  }

  async stats(shortCode: string) {
    const url = await this.prisma.url.findUnique({
      where: { shortCode },
    });
    if (!url) {
      throw new NotFoundException(`shortCode "${shortCode}" not found`);
    }
    return url;
  }

  private isUniqueViolation(err: unknown): boolean {
    return (
      typeof err === 'object' &&
      err !== null &&
      'code' in err &&
      (err as { code: string }).code === 'P2002'
    );
  }

  private isNotFound(err: unknown): boolean {
    return (
      typeof err === 'object' &&
      err !== null &&
      'code' in err &&
      (err as { code: string }).code === 'P2025'
    );
  }
}
