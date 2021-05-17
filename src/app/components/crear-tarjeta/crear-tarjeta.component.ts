import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCalendarAlt, faKey, faUserCircle, faCreditCard, faDatabase} from '@fortawesome/free-solid-svg-icons';
import { TarjetaCredito } from '../../models/TarjetaCredito';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {

  faCalendarAlt = faCalendarAlt;
  faKey = faKey;
  faUserCircle = faUserCircle;
  faCreditCard = faCreditCard;
  faDatabase = faDatabase;

  form: FormGroup;
  alertError = false;

  regexTarjetaCredito = /^[0-9]{16}|(([0-9]{4}\s){3}[0-9]{3,4})$/;
  regexFechaExpiracion = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/?([0-9]{2})$/;
  regexCvv = /^[0-9]{3}$/;
  regexNombres = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: ['', [Validators.required, Validators.pattern(this.regexNombres)]],
      numeroTarjeta: ['', [Validators.required, Validators.pattern(this.regexTarjetaCredito)]],
      fechaExpiracion: ['', [Validators.required, Validators.pattern(this.regexFechaExpiracion)]],
      cvv: ['', [Validators.required, Validators.pattern(this.regexCvv)]],
    })
   }

  ngOnInit(): void {
  }

  crearTarjeta(): void{

    if(this.form.invalid){
      this.form.markAllAsTouched();
      this.errorDeFormulario();
      return;
    }

    const TARJETA: TarjetaCredito = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    }

    console.log(TARJETA);

    this.form.markAllAsTouched();

  }

  validadorError( controlName: string ): boolean {
    return this.form.get(controlName)?.invalid && this.form.get(controlName)?.touched || false
  }

  errorDeFormulario(): void {
    this.alertError= true;
    setTimeout(() => {
      this.alertError = false
    }, 3000)
  }

}
