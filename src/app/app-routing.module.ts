import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './page/events-list/events-list.component';
import { EventEditorComponent } from '../app/event-editor/event-editor.component';

const routes: Routes = [
  {
    path: '',
    component: EventsListComponent },
  {
    path: 'event/:id',
    component: EventEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
