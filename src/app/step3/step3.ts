import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type ServiceType = 'SMS-OTP' | 'EMAIL-OTP' | 'SMS-NOTP' | 'EMAIL-NOTP' | 'WHATSAPP-TEMPLATE';

interface Provider {
  name: string;
  weight: number;
}

interface FormData {
  services: ServiceType[];
  providers: Record<ServiceType, Provider[]>;
}

@Component({
  selector: 'app-step3',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './step3.html',
  styleUrl: './step3.scss'
})
export class Step3 {
  @Input() formData!: FormData;
  @Output() formDataChange = new EventEmitter<FormData>();
  @Output() previous = new EventEmitter<void>();
  @Output() create = new EventEmitter<void>();

  addProvider(service: ServiceType) {
    this.formData.providers[service] = this.formData.providers[service] || [];
    this.formData.providers[service].push({ name: '', weight: 0 });
    this.formDataChange.emit(this.formData);
  }

  removeProvider(service: ServiceType, index: number) {
    this.formData.providers[service].splice(index, 1);
    this.formDataChange.emit(this.formData);
  }

  mockProviders: Record<ServiceType, string[]> = {
    'SMS-OTP': ['Twilio', 'MSG91'],
    'EMAIL-OTP': ['SendGrid', 'Mailgun'],
    'SMS-NOTP': ['Nexmo', 'Karix'],
    'EMAIL-NOTP': ['SES', 'Outlook'],
    'WHATSAPP-TEMPLATE': ['WATI', '360Dialog'],
  };
}
