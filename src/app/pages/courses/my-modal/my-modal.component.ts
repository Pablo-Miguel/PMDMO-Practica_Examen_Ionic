import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

type Person = {
  name: string;
};

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss'],
})
export class MyModalComponent implements OnInit {

  @Input() person!: Person;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalController.dismiss({ message: 'Este mensaje vuelve' }, 'confirm');
  }

}
