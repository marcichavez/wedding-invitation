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
}
