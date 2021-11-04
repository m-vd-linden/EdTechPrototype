import { Routes } from "@angular/router";
import { CollectionOverviewComponent } from "./collection-overview/collection-overview.component";
import { OverviewComponent } from "./components/overview/overview.component";

export const wrapperRoutes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'collection',
        component: CollectionOverviewComponent
    }
]