export interface SingleApp {
    name: string

    description: string
    bannerImage: string
    link: string
    tint: string
    source: Source
}
export enum Source {
    AppStore = 'App Store',
    Github = 'Github'
}

export interface AppType {
    name: string;
    icon: string;
    tint: string;
}