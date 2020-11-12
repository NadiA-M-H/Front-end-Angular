import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { GradeComponent } from './grade/grade.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';

export const routing = RouterModule.forRoot([
    {
        path: 'Home',
        component: HomeComponent,
        children: [
        {
        path: 'Student',
        component: StudentComponent,
        outlet: 'StudentMain'
        },
        {
        path: 'Grade',
        component: GradeComponent,
        outlet: 'StudentMain'
        },
        {
        path: 'Courses',
        component: CoursesComponent,
        outlet: 'StudentMain'
           
        }]
    },
    { path:'**', redirectTo: 'Home', pathMatch: 'full'}
]);