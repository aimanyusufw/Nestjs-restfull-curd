import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    await this.$connect()
      .then(() => this.logger.log('Database connected'))
      .catch((e) =>
        this.logger.error(
          e.message
            .split(' ')
            .map((data: string) => data.replace(/\n/g, ''))
            .join(' '),
        ),
      );
  }
}
