import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Step1 } from '../step1/step1';
import { Step2 } from '../step2/step2';
import { Step3 } from '../step3/step3';

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
  selector: 'app-form-wizard',
  standalone: true,
  imports: [CommonModule, Step1, Step2, Step3],
  templateUrl: './form-wizard.html',
  styleUrl: './form-wizard.scss',

})
export class FormWizard {
  step = 1;
  formData: FormData = {
    lobName: '',
    email: '',
    services: [],
    providers: {} as Record<ServiceType, Provider[]>,
  };

  goToStep(step: number) {
    this.step = step;
  }

  next() {
    this.step++;
  }

  previous() {
    this.step--;
  }

  updateProviders(data: FormData) {
    this.formData = data;
  }

  create() {
    console.log('Final Submission:', this.formData);
    alert('LOB Created Successfully!');
  }
}
