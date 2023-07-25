import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.page.html',
  styleUrls: ['./editinfo.page.scss'],
})
export class EditinfoPage {
    name: string;
    id: string;
    email: string;
    passwd: string;
    passwdchk:string;
  
    constructor(private router: Router, private toastController: ToastController) {
      this.name = '';
      this.id = '';
      this.email = '';
      this.passwd = '';
      this.passwdchk = '';  
  } 

  async onEditButtonClick() {
    // 입력값 검증
    if (this.name ==='test1' && this.id ==='test1' && this.email === 'test1@naver.com' && this.passwd === 'test123' && this.passwd === this.passwdchk) {
      // 입력값이 일치할 경우 홈 화면으로 이동
      this.router.navigate(['/tabs']); // '/home'은 실제로 이동할 홈 페이지의 경로에 맞게 수정해야 합니다.
    } else if(this.name === '') {
      const toast = await this.toastController.create({
        message: '이름을 입력해주세요.',
        duration: 2000, // 토스트 메시지가 표시될 시간 (밀리초)
        position: 'bottom' // 토스트 메시지의 위치 (top, bottom, middle 중 선택)
      });
      toast.present();
    }
    // else if(this.id === '') {
    //   const toast = await this.toastController.create({
    //     message: '아이디를 입력해주세요.',
    //     duration: 2000, // 토스트 메시지가 표시될 시간 (밀리초)
    //     position: 'bottom' // 토스트 메시지의 위치 (top, bottom, middle 중 선택)
    //   });
    //   toast.present();
    // } 
    else if(this.email === '') {
      const toast = await this.toastController.create({
        message: '이메일을 입력해주세요.',
        duration: 2000, // 토스트 메시지가 표시될 시간 (밀리초)
        position: 'bottom' // 토스트 메시지의 위치 (top, bottom, middle 중 선택)
      });
      toast.present();
    } else if (!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(this.email)) {
      const toast = await this.toastController.create({
        message: '잘못된 이메일입니다. 이메일을 다시 입력해주세요.',
        duration: 2000, // 토스트 메시지가 표시될 시간 (밀리초)
        position: 'bottom' // 토스트 메시지의 위치 (top, bottom, middle 중 선택)
      });
      toast.present();
    } else if(this.passwd === '') {
      const toast = await this.toastController.create({
        message: '비밀번호를 입력해주세요.',
        duration: 2000, // 토스트 메시지가 표시될 시간 (밀리초)
        position: 'bottom' // 토스트 메시지의 위치 (top, bottom, middle 중 선택)
      });
      toast.present();
    } else if(this.passwd !== this.passwdchk) {
      const toast = await this.toastController.create({
        message: '비밀번호가 일치하지 않습니다.',
        duration: 2000, // 토스트 메시지가 표시될 시간 (밀리초)
        position: 'bottom' // 토스트 메시지의 위치 (top, bottom, middle 중 선택)
      });
      toast.present();
    }
  }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
}

