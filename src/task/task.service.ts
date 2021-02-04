import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: TaskRepository,
  ) {}

  async getTaskById(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne(id)
    if (!task) {
      throw new NotFoundException(`Task with Id ${id} not found`);
    }

    return task;
  }

  async createTask() {
    
  }
}
