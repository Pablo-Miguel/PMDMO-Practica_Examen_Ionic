import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal, ModalController } from '@ionic/angular';
import { MyModalComponent } from './my-modal/my-modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  constructor(private alertController: AlertController, private modalController: ModalController) { }

  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          role: 'confirm',
          cssClass: 'primary',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  showModal() {
    this.modal.present();
  }

  async showModal2() {
    const mymodal = await this.modalController.create({
      component: MyModalComponent,
      componentProps: { person: { name: 'Pepe' } }
    });

    await mymodal.present();

    const { data, role } = await mymodal.onDidDismiss();

    console.log(data, role);

    if(role === 'confirm') {
      console.log('OK');
    }
  }

  onClose(){
    this.modal.dismiss();
  }

}
