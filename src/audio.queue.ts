import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

@Processor('audio')
export class AudioConsumer extends WorkerHost {
  async process(job: Job<any>): Promise<void> {
    await delay(5);
    console.log('Audio Done!');
  }
}
