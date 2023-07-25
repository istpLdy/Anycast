import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  memberId: number | any = '';
  passwd: string = '';
  memberName: string = '';
  email: string = '';
  passwdchk: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController,
    private signupService: SignupService
  ) {}

  async onSignupButtonClick(): Promise<void> {
    if (!this.isFormValid()) {
      this.showToastMessage('모든 정보를 입력하세요.');
      return;
    }

    if (!this.isEmailValid(this.email)) {
      this.showToastMessage('유효하지 않은 이메일 형식입니다.');
      return;
    }

    if (!this.isPasswordValid(this.passwd)) {
      this.showToastMessage(
        '비밀번호는 최소 8자 이상이어야 하며, 영문 대문자, 소문자, 숫자, 특수문자를 모두 포함해야 합니다.'
      );
      return;
    }

    if (this.passwd !== this.passwdchk) {
      this.showToastMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    const memberData = {
      memberId: this.memberId,
      passwd: this.passwd,
      memberName: this.memberName,
      email: this.email,
    };

    this.signupService.signup(memberData).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      async (error: any) => {
        let errorMessage = '회원가입에 실패했습니다.';
    
        if (error.error === 'id') {
          errorMessage = '이미 사용중인 아이디입니다.';
        } else if (error.error === 'email') {
          errorMessage = '이미 사용중인 이메일입니다.';
        }
    
        this.showToastMessage(errorMessage);
      }
    );    
  }

  private isFormValid(): boolean {
    return (
      this.memberName.trim().length > 0 &&
      this.memberId.toString().trim().length > 0 &&
      this.email.trim().length > 0 &&
      this.passwd.trim().length > 0
    );
  }

  private isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private isPasswordValid(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  private async showToastMessage(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}