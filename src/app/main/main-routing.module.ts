import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'auth',
        // component: AuthComponent
        loadChildren: () => {
            return import('./auth/auth.module')
            .then(m => m.AuthModule)
        }
    },
    {
        path: 'tasks',
        component: TasksComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tasks/:id',
        component: TaskComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class MainRoutingModule {
    
}
