import { Controller, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get(':id')
  async fetchTaskById(
    @Param() param:
  ): Promise<any>{
    
    return ''
  }
}
