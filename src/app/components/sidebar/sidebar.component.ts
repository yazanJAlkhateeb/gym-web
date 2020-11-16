import {Component, OnInit} from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {
        path: '/check-subscriber',
        title: 'Check Subscriber',
        icon: 'icon-badge',
        class: ''
    },
    {
        path: '/subscribers',
        title: 'Subscribers List',
        icon: 'icon-bank',
        class: ''
    },

    {
        path: '/add-subscriber',
        title: 'Create Subscriber',
        icon: 'icon-single-02',
        class: ''
    },

    {
        path: '/subscriber-measurement',
        title: 'Subscriber Measurement',
        icon: 'icon-notes',
        class: ''
    },
    {
        path: '/settings',
        title: 'Settings',
        icon: 'icon-settings',
        class: ''
    },
    // {
    //     path: '/icons',
    //     title: 'Icons',
    //     rtlTitle: 'الرموز',
    //     icon: 'icon-atom',
    //     class: ''
    // },
    // {
    //     path: '/notifications',
    //     title: 'Notifications',
    //     rtlTitle: 'إخطارات',
    //     icon: 'icon-bell-55',
    //     class: ''
    // },
    // {
    //     path: '/typography',
    //     title: 'Typography',
    //     rtlTitle: 'طباعة',
    //     icon: 'icon-align-center',
    //     class: ''
    // },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    }
}
