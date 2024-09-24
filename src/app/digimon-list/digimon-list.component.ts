import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../digimon.service';

@Component({
  selector: 'app-digimon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './digimon-list.component.html',
  styleUrl: './digimon-list.component.css'
})
export class DigimonListComponent implements OnInit
{

  tiposDigimon: string[] = ['Reptil', 'Mamífero', 'Ave'];

  digimons: {name: string, type: string} []= [];

  constructor(private digimonService: DigimonService){}

  ngOnInit(): void {
    this.digimons = this.digimonService.getDigimons();
  }

  deleteDigimons(index: number){
    this.digimonService.deleteDigimon(index);
  }

}