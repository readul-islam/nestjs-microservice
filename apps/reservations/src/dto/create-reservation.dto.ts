import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @Type(() => Date)
  @IsNotEmpty()
  @IsDate()
  startDate: Date;

  @Type(() => Date)
  @IsNotEmpty()
  @IsDate()
  endDate: Date;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  placeId: string;

  @IsString()
  @IsNotEmpty()
  invoiceId: string;
}
