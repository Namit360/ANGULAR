import { CounterService } from "./counter.service";

export class UserService
{
    activeUsers = ['FaF', 'Virat'];
    inactiveUsers = ['Will Jacks', 'Green'];
  
    constructor(private counterService: CounterService) {}
  
    setToActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.counterService.countActiveToInactive();
    }
  
    setToInactive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.counterService.countInActiveToActive();
    }    
}