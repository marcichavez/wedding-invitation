import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  coverImgSrc = '../assets/images/cover.jpg';
  bgTexture = '../assets/images/nude.jpg';

  showForm = true;
  nameFound = false;
  verifyingInvitation = false;
  checkNameBtnLbl = 'Check my name';

  rightPanelState = 'nameNotFound';

  verifyInvitation() {
    this.verifyingInvitation = true;
    this.checkNameBtnLbl = 'Browsing guestlists...';
    setTimeout(() => {
      this.rightPanelState = 'confirmationForm';
      this.checkNameBtnLbl = 'Check my name';
    }, 2000); // simulate a delay
  }
}
