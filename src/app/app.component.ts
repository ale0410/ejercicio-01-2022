import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio01Clase';

  miTipo:string = 'promedioEdades';
  promedio:number = 0;
  suma:number=0;
  edad1:number=0;
  edad2:number=0;
  miPromedio:number=0;
  miSuma:number=0;

  constructor(){
    //this.miSuma = new Suma();
    //sessionStorage.setItem("clave", "valor");
  }

  public limpiarCasillas()
  {
    this.edad1 = 0;
    this.edad2 = 0;
    this.miPromedio = 0;
    this.miSuma = 0;
  }

  public calcularSuma() : number
  {
    this.suma = this.edad1 + this.edad2;
    return this.suma;
  }

  public mostrarSuma() : number
  {
    this.miSuma = this.calcularSuma();
    return this.miSuma;
  }

  public calcularPromedio() : number
  {
    this.promedio = this.edad1 + this.edad2 / 2;
    console.log(this.promedio);
    return this.promedio;
  }

  public mostrarPromedio() : number
  {
    this.miPromedio = this.calcularPromedio();
    return this.miPromedio;
  }
  

  

  
}
