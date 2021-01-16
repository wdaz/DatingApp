import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  title: string;
  message: string;
  btnOkText: string;
  btnCancelText: string;
  result: boolean;

  constructor(public bsMoldaRef: BsModalRef) {}

  ngOnInit(): void {}

  confirm() {
    this.result = true;
    this.bsMoldaRef.hide();
  }

  decline() {
    this.result = false;
    this.bsMoldaRef.hide();
  }
}
