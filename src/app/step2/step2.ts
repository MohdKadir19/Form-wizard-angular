import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type ServiceType = 'SMS-OTP' | 'EMAIL-OTP' | 'SMS-NOTP' | 'EMAIL-NOTP' | 'WHATSAPP-TEMPLATE';

interface Provider {
  name: string;
  weight: number;
}

interface FormData {
  lobName: string;
  email: string;
  services: ServiceType[];
  providers: Record<ServiceType, Provider[]>;
}

@Component({
  selector: 'app-step2',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './step2.html',
  styleUrl: './step2.scss'
})
export class Step2 {
  @Input() formData!: FormData;
  @Output() formDataChange = new EventEmitter<FormData>();
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  serviceOptions: ServiceType[] = ['SMS-OTP', 'SMS-NOTP', 'EMAIL-OTP', 'EMAIL-NOTP', 'WHATSAPP-TEMPLATE'];
}
