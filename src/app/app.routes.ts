import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
//import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        // children: [
        //     { path: '', component: DashboardComponent },
        //     // add more pages like UsersComponent, etc.
        // ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
