import { NgForm } from '@angular/forms';
import { MessageService } from './../../_services/message.service';
import { Message } from './../../_models/message';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.scss'],
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() messages: Message[];
  @Output() emitSendMessage = new EventEmitter<string>();
  messageContent: string;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  sendMessage() {
    this.emitSendMessage.emit(this.messageContent);
    this.messageForm.reset();
  }
}
