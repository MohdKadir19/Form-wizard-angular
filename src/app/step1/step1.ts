import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-step1',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './step1.html',
  styleUrl: './step1.scss'
})
export class Step1 {

  @Input() formData!: FormData;
  @Output() formDataChange = new EventEmitter<FormData>();
  @Output() next = new EventEmitter<void>();

  isValid(): boolean {
    const { lobName, email } = this.formData;
    return !!lobName?.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
