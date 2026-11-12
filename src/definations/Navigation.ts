import {RequiredScopes} from "@kaelteflow/shared";

export interface INavigationRoute {
    path: string;
    name: string;
    icon?: string;
    permission?: RequiredScopes;
}

export interface INavigationPosition extends INavigationRoute {
    position: "after" | "before";
    target: string;
}

export interface INavigationGroup extends INavigationRoute {
    children: INavigationRoute[];
}