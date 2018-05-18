import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']

})
export class ContentComponent implements OnInit {

 

  public onlineStatus;

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  scenes: Array<string> = ["1. ปวดท้อง/หลัง", "2. แพ้ ", "3. สัตว์กัด", "4. เลือดออก", "5. หายใจลำบาก/ติดขัด", "6. หัวใจหยุดเต้น", "7. เจ็บแน่นทรวงอก/หัวใจ", "8. สำลัก/อุดกั้นทางเดินหายใจ", "9. เบาหวาน", "10. ภาวะฉุกเฉินเหตุสิ่งแวดล้อม", "11. [เว้นว่าง]", "12. ปวดศีรษะ/ทางตา/หู/คอ/จมูก", "13. ภาวะทางจิตประสาท/อารมณ์", "14. พิษ/รับยาเกินขนาด", "15. มีครรภ์/คลอด/นรีเวช", "16. ชัก/มีสัญญานบอกเหตุการชัก", "17. ป่วย/อ่อนเพลีย", "18. อัมพาต กล้ามเนื้ออ่อนแรง/เฉียบพลัน", "19. ไม่รู้สติ/ไม่ตอบสนอง/หมดสติชั่ววูบ", "20. เด็ก (กุมารเวชกรรม)", "21. ถูกทำร้าย", "22. ไหม้/Burnไฟฟ้าช๊อต", "23. ตกน้ำ/บาดเจ็บทางน้ำ", "24. พลัดตกหกล้ม/อุบัติเหตุ/เจ็บปวด", "25. อุบัติเหตุยานยนต์"];
  users: Array<any>;
  myDate: Date;
  team: string = "";
  selectedValue: string = "";
  selectedUser: string = "";
  length: number
  usericonLogin = "../../assets/unknown.jpg";
  userAvatar = "../../assets/unknown.jpg";
  userName: string = "Login";
  userNameLogin: string = "Login";
  loginStatus :boolean = true;
  loginLabel = "Log in";
  dateSelected: string = '';
  datepick :any ;

  constructor(private afDB: AngularFireDatabase) {

    this.itemsRef = afDB.list('queue');
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));

    });

    this.itemsRef.snapshotChanges().map(list => list.length).subscribe(
      length => this.length = length
    )

  }


  valueChange(){
    // var a = document.getElementById("datepicker").textContent ;
    console.log('date :'+ this.datepick )
  }

  ngOnInit() {
    

    setInterval(() => {         //replaced function() by ()=>
      this.myDate = new Date();
      this.checkInternet();

    }, 1000);


    this.users = [
      { no: '1', name: 'JUM', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t31.0-8/16722676_593899110807945_1809879082322421764_o.jpg?_nc_cat=0&oh=152aba15b176ffef5dd795661afbf229&oe=5B59AB41' },
      { no: '3', name: 'Max', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/22894382_1349754738466301_3426447927998133456_n.jpg?_nc_cat=0&oh=4a535340f8ac28cfc92f4c9684ca1d38&oe=5B9C1229' },
      { no: '3', name: 'Nai', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/23471990_1529843640437667_113039535340377071_n.jpg?_nc_cat=0&oh=00ea9e4e847a13d3a42bc4fbc005355b&oe=5B59DE22' },
      { no: '3', name: 'Soon', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/11270115_1618951101654802_3491114798328605761_n.jpg?_nc_cat=0&oh=c57f4c7de89799ea1e5a710c846bacbb&oe=5B8E20E6' },
      { no: '2', name: 'Duang', icon: 'https://scontent.fbkk1-5.fna.fbcdn.net/v/t1.0-9/27332456_1681991611857069_5996452114338075863_n.jpg?_nc_fx=fbkk1-5&_nc_cat=0&oh=7ec86bf549299ac84453a284e29efc46&oe=5B5A9CA5' },
      { no: '3', name: 'Aom', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/27545476_1684039448320007_1191864929085750470_n.jpg?_nc_cat=0&oh=2558808b614708b6012f7fae138c8071&oe=5B57A928' },
      { no: '3', name: 'Prim', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/31056862_1767777039911438_2837078842516963328_o.jpg?_nc_cat=0&oh=f1160a6a71cf0d8779b383c6b92fc834&oe=5B4EC321' },
      { no: '3', name: 'Add', icon: '../../assets/unknown.jpg' },
      { no: '3', name: 'Somruk', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t31.0-8/30051868_1790826244343407_1613055652281267038_o.jpg?_nc_cat=0&oh=6021f244e38df241bf8547edad290b58&oe=5B9790A9' },
      { no: '3', name: 'Jeed', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/28056382_2026206780988318_5770099347742291995_n.jpg?_nc_cat=0&oh=bbaac77f5c42ec0f3bd1436eb3f748b0&oe=5B959F12' },
      { no: '3', name: 'Yok', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t31.0-8/27798165_10209400968095890_139395733847077776_o.jpg?_nc_cat=0&oh=005461113926f51ffb5b361e4f75d39b&oe=5B8FB227' },
      { no: '3', name: 'Too', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/21687588_588335748003747_6898293514855277801_n.jpg?_nc_cat=0&oh=85078cd602466336c1c013b83bd11b7d&oe=5B930B36' },
      { no: '3', name: 'Kik', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/31675807_10214085305861463_5808986032829366272_o.jpg?_nc_cat=0&oh=54bcf0cda5c5fb47d2a34cd3dc37dc0f&oe=5B5DD903' },
      { no: '3', name: 'Aon', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/29356259_1692101067525164_2179308978976834767_n.jpg?_nc_cat=0&oh=301d17b0f267b5390dc9ee4e89b6d08c&oe=5B8BE247' },
      { no: '3', name: 'Wat', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/24131015_1708527462493256_2079461869982859036_n.jpg?_nc_cat=0&oh=93b5c39c166ee7152396a2e0a58f7cc4&oe=5B5A9795' },
      { no: '3', name: 'P`A', icon: '../../assets/unknown.jpg' },
      { no: '3', name: 'Naris', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/30657177_1814906798569731_3933548558328343622_n.jpg?_nc_cat=0&oh=c553b58e17251f3665e3f51697b7964e&oe=5B8D1694' },
      { no: '3', name: 'KK', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/22815518_2027323587498382_5710854563461131902_n.jpg?_nc_cat=0&oh=977c6bf8471d3eb07ddacd10e80996ef&oe=5B56373B' },
      { no: '3', name: 'Maew', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/30743627_2203323583041683_8555409308412542976_n.jpg?_nc_cat=0&oh=e976c4dd03d0e21b0f703ee8f2cfc766&oe=5B9B9655' },
      { no: '3', name: 'Prapa', icon: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t31.0-8/10295410_667765479961566_4396930682334565885_o.jpg?_nc_cat=0&oh=0bce95236496c80a4e3c9ca9932608af&oe=5B4FFB1C' },

    ];
  }
  navigator_check :boolean = false;

  btnColor = "";
  checkInternet() {
    if(navigator.onLine){
      this.onlineStatus = "Online"
      this.navigator_check = true;
      this.btnColor = "btn-success";
    }else{
      this.onlineStatus = "Offline"
      this.btnColor = "btn-danger";
      this.navigator_check = false;


    }
   
  }
  onChange(user) {
    this.userAvatar = user.icon;
    this.userName = user.name;
  }

  onLogin() {
  
    this.usericonLogin = this.userAvatar;
    this.userNameLogin = this.userName;

    if(this.loginStatus){
      this.onLogout();
      this.loginLabel = "Log out"
    }else{
      this.loginLabel = "Log in"
    }
  }
  
  onLogout(){
    this.userAvatar = "../../assets/unknown.jpg";
    this.userName = "Login";
  }

  addQueue() {
    console.log(this.team);
    console.log(this.selectedValue);

    const itemsRef = this.afDB.list('queue');
    itemsRef.push({ team: this.team, scene: this.selectedValue, user: this.userNameLogin, timestamp: Date.now(), number: this.length + 1 });
   
    // clear text
    this.team = "";
    this.selectedValue = "";

  }

}


