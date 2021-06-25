import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateModulesComponent } from './components/create-modules/create-modules.component';
import { CreateProfComponent } from './components/create-prof/create-prof.component';
import { ListeModulesComponent } from './components/liste-modules/liste-modules.component';
import { ListeProfesseursComponent } from './components/liste-professeurs/liste-professeurs.component';
import { ProfDetailsComponent } from './components/prof-details/prof-details.component';
import { SousModulesComponent } from './components/sous-modules/sous-modules.component';
import { TpComponent } from './components/sous-modules/tp/tp.component';
import { TdComponent } from './components/sous-modules/td/td.component';
import { CoursComponent } from './components/sous-modules/cours/cours.component';

/*la bonne pratique pour routing !!*/


const routes: Routes = [
  
  { path : '' , component : ListeProfesseursComponent},
  { path : 'newProf', component : CreateProfComponent},
  { path : 'newModule', component :  CreateModulesComponent},
  { path : 'profDetails', component : ProfDetailsComponent},
  { path : 'liste' , component : ListeProfesseursComponent},
  { path : 'sousModule' , component : SousModulesComponent,
    children: [
      { path: 'tp', 
      component: TpComponent },
      {
        path: 'td',
        component: TdComponent
      },
      { path : 'cours',
        component: CoursComponent
      }
    ]
  },
  { path : 'module', component : ListeModulesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }