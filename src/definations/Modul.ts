import {MaybeAsync, Route, Routes} from "@angular/router";

export interface IFrontendModule {
    routes?: Route | Routes;

    init?(context: IFrontendContext): MaybeAsync<void>;
}

export interface IFrontendContext {
}