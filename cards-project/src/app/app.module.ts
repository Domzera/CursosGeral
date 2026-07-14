import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceCardComponent } from './component/balance-card/balance-card.component';
import { CreditCardComponent } from './component/credit-card/credit-card.component';
import { DebitCardComponent } from './component/debit-card/debit-card.component';
import { ClientInfosCardComponent } from './component/client-infos-card/client-infos-card.component';
import { CardItemComponent } from './component/card-item/card-item.component';
import { CardLineComponent } from './component/card-line/card-line.component';
import { CardTitleComponent } from './component/card-title/card-title.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    ClientInfosCardComponent,
    CardItemComponent,
    CardLineComponent,
    CardTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
