import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryStoreModule } from '@mf-app/shared/data-store';
 import { ShellFeatureMenuModule } from '@eprod-ui/feature-menu';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule(
{
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    GalleryStoreModule,
    ShellFeatureMenuModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
        },
        {
          path: 'gallery',
          loadChildren: () =>
            import('gallery/Module').then((m) => m.RemoteEntryModule)
        },
        {
          path: 'billing',
          loadChildren: () =>
            import('billing/Module').then((m) => m.RemoteEntryModule)
        },
        {
          path: 'ticket',
          loadChildren: () =>
            import('ticket/Module').then((m) => m.RemoteEntryModule)
        },
        
        {
          path: 'invoicing',
          loadChildren: () =>
            import('invoicing/Module').then((m) => m.RemoteEntryModule)
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
