import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import('./features/features.module').then((mod) => mod.FeaturesModule)
    }
];
