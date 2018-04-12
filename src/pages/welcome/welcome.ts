import { HomePage } from './../home/home';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user';



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  public user:any = {
    curp : ''
  }

  public sabe:any = {
    si:false
  }

  curp:String;


  constructor(public navCtrl: NavController, public navParams: NavParams ,public UserSrv:UserService) {
console.log(this.user.curp);
   this.curp = this.UserSrv.curp;
 this.curp= this.curp.substring(10,11);

 if(this.curp=='H'){this.sabe.si =true }else {this.sabe.si =false};


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  

  patras():void{
   
      this.navCtrl.push(HomePage);

   

  }


}