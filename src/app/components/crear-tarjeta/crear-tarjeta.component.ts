import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCalendarAlt, faKey, faUserCircle, faCreditCard, faDatabase} from '@fortawesome/free-solid-svg-icons';

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

  regexTarjetaCredito = /^[0-9]{16}|(([0-9]{4}\s){3}[0-9]{3,4})$/;
  regexFechaExpiracion = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  regexCvv = /^[0-9]{3}$/;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: ['', [Validators.required]],
      numeroTarjeta: ['', [Validators.required, Validators.pattern(this.regexTarjetaCredito)]],
      fechaExpiracion: ['', [Validators.required, Validators.pattern(this.regexFechaExpiracion)]],
      cvv: ['', [Validators.required, Validators.pattern(this.regexCvv)]],
    })
   }

  ngOnInit(): void {
  }

  crearTarjeta(): void{
    console.log('Hola')
  }
}
