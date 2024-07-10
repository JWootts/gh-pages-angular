import { Routes } from "@angular/router";

import { ContactpageComponent } from "../app/pages/contactpage/contactpage.component";
import { HomepageComponent } from "../app/pages/homepage/homepage.component";
import { ProjectspageComponent } from "../app/pages/projectspage/projectspage.component";
import { WelcomepageComponent } from "../app/pages/welcomepage/welcomepage.component";

export const routes: Routes = [
    { path: 'about', component: HomepageComponent },
    { path: 'projects', component: ProjectspageComponent },
    { path: 'contact', component: ContactpageComponent },
    { path: 'welcome', component: WelcomepageComponent },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
];