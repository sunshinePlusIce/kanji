import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/general/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainComponent } from './pages/main/main.component';
import { MatListModule } from '@angular/material/list';
import { KanjiListComponent } from './components/kanji/kanji-list/kanji-list.component';
import { KanjiItemComponent } from './components/kanji/kanji-item/kanji-item.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { StatusbarComponent } from './components/general/statusbar/statusbar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { KanjiDetailComponent } from './components/kanji/kanji-detail/kanji-detail.component';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './components/login/login.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from './components/profile/profile.component';
import { NormalComponent } from './components/cards/normal/normal.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { HelpComponent, HelpDialogComponent } from './components/general/dialog/help/help.component';
import { RegisterHelpComponent, RegisterHelpDialog } from './components/general/dialog/register-help/register-help.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainComponent,
    KanjiListComponent,
    KanjiItemComponent,
    StatusbarComponent,
    KanjiDetailComponent,
    LoginComponent,
    ProfileComponent,
    NormalComponent,
    HelpComponent,
    HelpDialogComponent,
    RegisterHelpComponent,
    RegisterHelpDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatTableModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [HttpClientModule, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
