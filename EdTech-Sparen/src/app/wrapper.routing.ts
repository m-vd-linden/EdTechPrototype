import { Routes } from "@angular/router";
import { OverviewComponent } from "./components/overview/overview.component";

export const wrapperRoutes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent
    },
]