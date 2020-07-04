import { Routes } from "@angular/router";
import { MainComponent } from "./app-layouts/main/main.component";
import { LoginComponent } from "./app-widgets/login/login.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: { title: "Login" },
  },
  {
    path: "gts",
    component: MainComponent,
    children: [
      {
        path: "home",
        loadChildren:
          "./app-widgets/home-page-widgets/home-page-widgets.module#HomePageWidgetsModule",
      },
      {
        path: "WorkInstructions",
        loadChildren:
          "./app-widgets/work-instr/work-instr.module#WorkInstrModule",
      },
      {
        path: "Scope",
        loadChildren: "./app-widgets/scope/scope.module#ScopeModule",
      },
      {
        path: "policy",
        loadChildren: "./app-widgets/policy/policy.module#PolicyModule",
      },
      {
        path: "Training",
        loadChildren: "./app-widgets/training/training.module#TrainingModule",
      },
      {
        path: "DocumentControl",
        loadChildren:
          "./app-widgets/document-controll/document-controll.module#DocumentControllModule",
      },
      {
        path: "MRMmeeting",
        loadChildren:
          "./app-widgets/mrm-meeting/mrm-meeting.module#MrmMeetingModule",
      },
      {
        path: "IncidentComplain",
        loadChildren:
          "./app-widgets/incident-complain-note/incident-complain-note.module#IncidentComplainNoteModule",
      },
      {
        path: "Trace",
        loadChildren:
          "./app-widgets/tracibility/tracibility.module#TracibilityModule",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  // { path: '**', component: LoginComponent },
];
