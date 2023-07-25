import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  id: string;
  passwd: string;

  constructor(private router: Router, private menuController: MenuController, private toastController: ToastController) {
    this.id = '';
    this.passwd = '';
  }

  ionViewDidEnter() {
    this.menuController.enable(false, 'menu-content');
  }

  ionViewWillLeave() {
    this.menuController.enable(true, 'menu-content');
  }

  async onLoginButtonClick() {
    // 입력값 검증
    if (this.id === 'test' && this.passwd === 'test123') {
      // 입력값이 일치할 경우 홈 화면으로 이동
      this.router.navigate(['/tabs']); // '/home'은 실제로 이동할 홈 페이지의 경로에 맞게 수정해야 합니다.
    } else {
      const toast = await this.toastController.create({
        message: '아이디 또는 비밀번호가 일치하지 않습니다.',
        duration: 2000, // 토스트 메시지가 표시될 시간 (밀리초)
        position: 'bottom' // 토스트 메시지의 위치 (top, bottom, middle 중 선택)
      });
      toast.present();
    }
  }
}
