import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
      ],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      city: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      address: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }
  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      console.log('invalid');
    } else {
      console.log('valid');
    }
  }
  onReset() {
    this.submitted = false;
    this.contactForm.reset();
  }
}
