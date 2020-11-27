import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';
import { TurmasService } from './turmas.service';
import { DisciplinasService } from './disciplinas.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        ListaDeTurmasComponent,
    ],
    providers: [
        TurmasService,
        DisciplinasService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
