import { Component, OnInit, Input } from '@angular/core';
import { MatiereService } from '../../../services/matiere.service';
import { Matiere } from "../../../models/matiere.model";
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite.service';
import { activitePedagogiques } from 'src/app/models/activite.model';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.css']
})
export class TpComponent implements OnInit {

  matiere: Matiere;
  activite: activitePedagogiques;
  constructor(private route: ActivatedRoute, private matiereService: MatiereService, private activiteService: ActiviteService) {
    this.route.parent.params.subscribe(params => {
      this.matiereService.getMatiereByID(params.id2).subscribe(data => {
        this.matiere = data;
        console.log(data);
        this.matiere.activitePedagogiques.forEach(m => {
          this.activiteService.getActivityByID(m.id).subscribe(data => {
            if (m.nature == "tp") {
              this.activite = data;
              console.log(this.activite);
            }
          });
        });
      });
    });
  }

  ngOnInit(): void {
  }

}

