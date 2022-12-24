import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    serverId:number = 10;
    serverName:string = 'SSH'

    isAllow:boolean = false;
    servesStatus:boolean = false;

    constructor(){
        setTimeout(()=>{this.isAllow = true},2000);

    }

    changeServerStatus(){
      this.servesStatus = !this.servesStatus
    }

}
