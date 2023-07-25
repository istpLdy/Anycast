import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit{
  isIndeterminate:boolean | undefined;
  masterCheck:boolean | undefined;
  checkBoxList:any;

  selectAll: boolean = false;
  termsAgreed: boolean = false;
  privacyAgreed: boolean = false;

  toggleSelectAll() {
    this.termsAgreed = this.selectAll;
    this.privacyAgreed = this.selectAll;
    console.log(this.checkBoxList)
  }

  updateSelectAll() {
    if (this.termsAgreed && this.privacyAgreed) {
      this.selectAll = true;
    } else {
      this.selectAll = false;
    }
  }

  constructor(private router: Router, private toastController: ToastController){

  }

  async proceed() {
    if (this.selectAll && this.termsAgreed && this.privacyAgreed) {
      // Proceed with the signup process
      this.router.navigate(['/signup']);
      console.log('All checkboxes are checked');
    } else {
      const toast = await this.toastController.create({
        message: '필수 약관에 동의해주세요',
        duration: 2000, // Duration in milliseconds
        position: 'bottom' // Position of the toast message
      });

      toast.present();
    }
  }
  //   this.checkBoxList = [
  //     {
  //       value:"이용 약관 동의(필수)",
  //       isChecked:false
  //     },{
  //       value:"개인정보 수집 및 이용(필수)",
  //       isChecked:false
  //     }
  //   ];
  // }

  // checkMaster() {
  //   setTimeout(()=>{
  //     this.checkBoxList.forEach((obj: { isChecked: boolean | undefined; }) => {
  //       obj.isChecked = this.masterCheck;
  //     });
  //   });
  // }

  // checkEvent() {
  //   const totalItems = this.checkBoxList.length;
  //   let checked = 0;
  //   this.checkBoxList.map((obj: { isChecked: any; }) => {
  //     if (obj.isChecked) checked++;
  //   });
  //   if (checked > 0 && checked < totalItems) {
  //     //If even one item is checked but not all
  //     this.isIndeterminate = true;
  //     this.masterCheck = false;
  //   } else if (checked == totalItems) {
  //     //If all are checked
  //     this.masterCheck = true;
  //     this.isIndeterminate = false;
  //   } else {
  //     //If none is checked
  //     this.isIndeterminate = false;
  //     this.masterCheck = false;
  //   }
  // }

  ngOnInit() {
  }

}

