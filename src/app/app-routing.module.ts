import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    component:EducationComponent,
    path:'education'
  },
  {
    component:InterestsComponent ,
    path:'interests'
  },
  {
    component:ContactComponent,
    path:'contact'
  },
  {
    component:SkillsComponent,
    path:'skills'
  },
  {
    component:ProjectsComponent,
    path:'projects'
  },
  {
    component:ExperienceComponent,
    path:'experience'
  },
  {
    component:ResponsibilitiesComponent,
    path:'responsibilities'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
