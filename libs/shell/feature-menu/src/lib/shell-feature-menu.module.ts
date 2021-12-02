import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MegaMenuModule
  ],
  declarations: [
    MainMenuComponent
  ],
  exports: [
    MainMenuComponent
  ],
})
export class ShellFeatureMenuModule {}
