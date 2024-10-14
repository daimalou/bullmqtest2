import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class AppService {
  constructor(@InjectQueue('audio') private audioQueue: Queue) {}

  async getHello(): Promise<void> {
    try {
      const jobs = [1, 2, 3, 4, 5];

      const newimages = jobs.map((item, index) => {
        if (index !== 3) {
          return {
            name: 'aaa',
            data: item,
          };
        } else {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          return 'rrrrr';
        }
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const jobs2 = await this.audioQueue.addBulk(newimages);
      console.log('jobs2', jobs2);
    } catch (error) {
      console.log('error', 'error');
    }
  }
}
