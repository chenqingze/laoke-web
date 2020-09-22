import {Injectable} from '@angular/core';
import {DbService} from '../../../shared/db.service';
import {Group} from '../../../core/lib/Group_pb';
import {GroupModel} from '../group.model';

@Injectable({
    providedIn: 'root'
})
export class GroupService {
    constructor(private dbService: DbService) {

    }

}
