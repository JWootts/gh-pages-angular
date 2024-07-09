import { Component, Inject } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

import { DOCUMENT } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';

import { NgParticlesService } from '@tsparticles/angular';
import { Container, Engine, MoveDirection, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website-personal';
  isMobile: boolean = false;

  particlesUrl = "http://foo.bar/particles.json";
  id = "tsparticles";

  particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 4,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  constructor(@Inject(DOCUMENT) private document: Document, translate: TranslateService, private deviceService: DeviceDetectorService,
                                      private readonly ngParticlesService: NgParticlesService) {
    translate.setDefaultLang('en');
    translate.use('en');

    const theme = sessionStorage.getItem('cds-theme');
    if(theme !== null)
      document.body.setAttribute('cds-theme', theme);
    else
      document.body.setAttribute('cds-theme', 'dark');
      
    this.isMobile = this.deviceService.isMobile()
  }

  ngOnInit(): void {
    void this.ngParticlesService.init(async (engine: Engine) => {
      console.log("init", engine);

      await loadSlim(engine);
    });
  }

  public particlesLoaded(container: Container): void {
    console.log("loaded", container);
  }
}