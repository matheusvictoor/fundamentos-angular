import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Matheus";
  dataNascimento = "1995-06-23";
  urlImagem = "/assets/tartaruga.jpg";

  mostrarDataNascimento(){
    alert(`A data de nascimento é: ${this.dataNascimento}`);
  }
}
  