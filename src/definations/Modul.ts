import {MaybeAsync, Routes} from "@angular/router";
import {INavigationRoute} from "./Navigation";

export interface IFrontendModule {
    routes?: Routes;
    navigation?: INavigationRoute[];

    init?(context: IFrontendContext): MaybeAsync<void>;
}

export interface IFrontendContext {
}