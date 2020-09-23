import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Observable, of, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { DbService } from 'src/app/im/shared/db.service';
import { Friend } from '../friend.model';

@Injectable({
  providedIn: 'root'
})
export class FriendService {



  constructor(private dbService:DbService) { 
    console.log("FriendService Constructor ...")
  }

  //-----------------------------------------------------------sql----------------------------------------------------------

  getFriend(): Observable<any>{
    return this.dbService.dbReady$().pipe(mergeMap(isDbReady=>{
          if(isDbReady){
            return this.dbService.storage.executeSql("select * from friend",[]);
          }
          return of(null);
    }));
  }

  //-----------------------------------------------------------http---------------------------------------------------------

}
