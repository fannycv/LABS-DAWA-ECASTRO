import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  isFormValid: boolean = false;
  showAlert: boolean = false;
  showInvalidEmailAlert: boolean = false;
  showIncompleteFieldsAlert: boolean = false;
  datosIngresados: { nombre: string; email: string }[] = [];

  validateForm() {
    this.isFormValid =
      this.nombre.trim().length > 0 && this.email.trim().length > 0;
  }

  onSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.isFormValid && emailRegex.test(this.email)) {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);

      this.datosIngresados.push({ nombre: this.nombre, email: this.email });

      this.nombre = '';
      this.email = '';
      this.isFormValid = false;
    } else if (this.isFormValid) {
      this.showInvalidEmailAlert = true;
      setTimeout(() => {
        this.showInvalidEmailAlert = false;
      }, 3000);
    } else {
      this.showIncompleteFieldsAlert = true;
      setTimeout(() => {
        this.showIncompleteFieldsAlert = false;
      }, 3000);
    }
  }
  showConfirmation() {
    this.showAlert = true;
  }

  sendForm() {
    this.showAlert = false;
    this.onSubmit();
  }

  cancelForm() {
    this.showAlert = false;
  }
}
