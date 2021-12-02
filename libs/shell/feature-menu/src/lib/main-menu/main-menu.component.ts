import { Component, OnInit } from '@angular/core';

import {MegaMenuItem} from 'primeng/api'; 

@Component({
  selector: 'shell-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  items: MegaMenuItem[] = [];
  constructor() { }
  

  ngOnInit(): void {
    this.items = [
      {
          label: 'Agreements', icon: 'pi pi-fw pi-video',
          items: [
              [
                  {
                      label: 'Contracts',
                      items: [{label: 'Search Contract'}, {label: 'Create Contract'}]
                  },
                  {
                      label: 'Tariffs',
                      items: [{label: 'Search Tariff'}, {label: 'Create Local Tariff'}]
                  }
              ],
              [    
                  {
                    label: 'Rate Sheets',
                    items: [{label: 'Search Rate Sheets'}, {label: 'Create Rate Sheets'}]
                  },
                  {
                    label: 'Product Lease',
                    items: [{label: 'Search Rate Sheets'}, {label: 'Create Rate Sheets'}]
                  }
              ],
          ]
      },
  
      {
        label: 'Accounting', icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Billing',
                    items: [{label: 'Billing Record Search'}, {label: 'Customer Billing Record Search'}]
                },
            ],
            [
                {
                    label: 'Invoicing',
                    items: [{label: 'Invoice Search'}, {label: 'Customer Invoice Search'}]
                }
            ],
        ]
      },

      {
        label: 'Nominations', icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Nominations',
                    items: [{label: 'Search'}, {label: 'VIR Search'}]
                },
                {
                    label: 'PTO',
                    items: [{label: 'Search'}, {label: 'Create'}]
                }
            ],
        ]
      },

      {
        label: 'Nominations', icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Nominations',
                    items: [{label: 'Search'}, {label: 'VIR Search'}]
                },
                {
                    label: 'PTO',
                    items: [{label: 'Search'}, {label: 'Create'}]
                }
            ],
        ]
      },

      {
        label: 'Terminals', icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Terminal Authorization',
                    items: [{label: 'Search'}, {label: 'Load Authorization Create'}]
                },
                {
                    label: 'Access Controls',
                    items: [{label: 'Product Control Search'}, {label: 'Product Control Create'}]
                }
            ],
        ]
      },
    ]
  }    
}
