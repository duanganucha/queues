import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})

export class RightComponent implements OnInit {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  
  item : Items = new Items(); 

  constructor(private afDB: AngularFireDatabase) {

    this.itemsRef = afDB.list('queue');
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  
  }

  ngOnInit() {
  }

  onManager(item){
    this.item.timestamp = item.timestamp;
    this.item.number = item.number;
    this.item.team = item.team;
    this.item.scene = item.scene;
    this.item.user = item.user;
    this.item.note = item.note;
  }

}

class Items  {
  number : number;
  timestamp2 = Date.now();
  timestamp ;
  team:string;
  scene:string;
  user:string;
  note:string;
}
