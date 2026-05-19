import { IsOptional, IsString, IsUrl, Length, Matches } from 'class-validator';

export class CreateUrlDto {
  @IsUrl({ require_protocol: true }, { message: 'originalUrl must be a valid URL with protocol' })
  originalUrl!: string;

  @IsOptional()
  @IsString()
  @Length(4, 16)
  @Matches(/^[A-Za-z0-9_-]+$/, {
    message: 'customCode must contain only letters, numbers, underscore, or hyphen',
  })
  customCode?: string;
}
