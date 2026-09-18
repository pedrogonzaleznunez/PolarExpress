import { IsNotEmpty, IsNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateTrainDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  operator: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsNumber()
  @IsPositive()
  capacity: number;

  @IsNumber()
  @IsPositive()
  maxSpeed: number;
}