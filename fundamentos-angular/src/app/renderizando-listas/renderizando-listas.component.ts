import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1,  nome: "Celular XL", descricao: "Um celular ultima geração", esgotado: false},
    {id: 2,  nome: "Celular GH", esgotado: false},
    {id: 3,  nome: "Celular Mini", descricao: "Descrição do celular 3", esgotado: true}
  ];
}
