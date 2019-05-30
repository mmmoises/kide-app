import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = "";
  password: string = "";
  email: string = "";
  name: string = "";

  constructor(
    private router:Router,
    private postPvdr: postProvider,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async prosesRegister(){
    
    if(this.username ==""){
      const toast = await this.toastCtrl.create({
        message: 'User is requiered',
        duration: 2000
      });
      toast.present();
    }else if(this.password==""){
      const toast = await this.toastCtrl.create({
        message: 'password is requiered',
        duration: 2000
      });
      toast.present();

    }else{
      
      let body ={
        username: this.username,
        password: this.password,
        email: this.email,
        name: this.name,
        aksi: 'register'
      };


      
      this.postPvdr.postData(body, 'proses-api.php').subscribe( async data=>{
       /* var alertmsg = data.msg;
        if(data.success){
          this.router.navigate(['/login']);
          const toast = await this.toastCtrl.create({
            message: 'Register successful',
            duration: 2000
          });
          toast.present();
        }else{
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
  
        } 
  
      
     */
    if(data.success){
      this.router.navigate(['/login']); 
    }else{
      console.log('no');
      
    }
     
    });


    }


  }

}
