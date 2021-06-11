import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})

export class BackendErrorMessagesComponent implements OnChanges {

  @Input() backendErrors: BackendErrorsInterface;
  errMessages: string[];

  constructor() { }

  ngOnChanges(): void {
    this.errMessages = Object.entries(this.backendErrors).map(([key, value]) => `${key} ${value}`);
  }
}
