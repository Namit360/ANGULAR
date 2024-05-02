export class LogingService{
    logStatusChange(status : string)
    {
        console.log('A server status has changed: '+ status);
    }
}