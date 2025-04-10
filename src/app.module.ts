/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(), // you'll set config later
    // AuthModule,
    // UsersModule,
    // WalletModule,
    // TransactionsModule,
    // FxModule,
  ],
})
export class AppModule {}
