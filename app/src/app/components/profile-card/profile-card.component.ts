import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  @Input() professeur;
  constructor(private professeurService: ProfesseurService ,private route: ActivatedRoute,) {
    this.route.params.subscribe(params =>{
      this.onGetProfById(params.id);
      })
  }

  ngOnInit(): void {
  }

  onGetProfById(id: number) {
    this.professeurService.getProfesseurByID(id).subscribe((data) => {
      this.professeur = data;
    });
  }
}

