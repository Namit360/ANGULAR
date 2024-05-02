export class CounterService
{
    activeToInactive = 0;
    inactiveToActive = 0;
  
    countActiveToInactive() 
    {
      this.activeToInactive++;
      console.log('Count Active to Inactive: ' + this.activeToInactive);
    }
  
    countInActiveToActive() 
    {
      this.inactiveToActive++;
      console.log('Count Inactive to Active: ' + this.inactiveToActive);
    }   
}