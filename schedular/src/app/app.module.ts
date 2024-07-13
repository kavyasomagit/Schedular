import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompletedTabComponent } from './completed-tab/completed-tab.component';
import { TodoTabComponent } from './todo-tab/todo-tab.component';
import { CancelledTabComponent } from './cancelled-tab/cancelled-tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { SingleItemComponent } from './single-item/single-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompletedTabComponent,
    TodoTabComponent,
    CancelledTabComponent,
    TabsComponent,
    SingleItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:TodoTabComponent},
      {path:'completed',component:CompletedTabComponent},
      {path:'todo',component:TodoTabComponent},
      {path:'cancelled',component:CancelledTabComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
