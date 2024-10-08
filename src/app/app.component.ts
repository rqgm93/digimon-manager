import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DigimonListComponent } from './digimon-list/digimon-list.component';
import { DigimonAddComponent } from './digimon-add/digimon-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DigimonListComponent, DigimonAddComponent, RouterLink], // Importa RouterLink
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digimon-manager';
}
