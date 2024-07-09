import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectspageComponent } from './pages/projectspage/projectspage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './components/settings/settings.component';
import { DropdownCardComponent } from './components/dropdown-card/dropdown-card.component';
import { WorkhistoryTreeComponent } from './components/workhistory-tree/workhistory-tree.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProjectcardComponent } from './components/projectcard/projectcard.component';
import { ClonewizardComponent } from './components/clonewizard/clonewizard.component';
import { WelcomepageComponent } from './pages/welcomepage/welcomepage.component';
import { WelcomecharacterComponent } from './components/welcomecharacter/welcomecharacter.component';
import { WelcometextfeedComponent } from './components/welcometextfeed/welcometextfeed.component';
import { EmailwizardComponent } from './components/emailwizard/emailwizard.component';
import { ContacttileComponent } from './components/contacttile/contacttile.component';

import { NgxParticlesModule } from "@tsparticles/angular";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ResumemodalComponent } from './components/resumemodal/resumemodal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProjectspageComponent,
    ContactpageComponent,
    SettingsComponent,
    DropdownCardComponent,
    WorkhistoryTreeComponent,
    SidenavComponent,
    ProjectcardComponent,
    ClonewizardComponent,
    WelcomepageComponent,
    WelcomecharacterComponent,
    WelcometextfeedComponent,
    EmailwizardComponent,
    ContacttileComponent,
    ResumemodalComponent
  ],
  imports: [
    PdfViewerModule,
    NgxParticlesModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClipboardModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
