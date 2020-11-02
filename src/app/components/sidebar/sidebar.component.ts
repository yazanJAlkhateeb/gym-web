import {Component, OnInit} from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    rtlTitle: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {
        path: '/subscribers',
        title: 'Subscribers List',
        rtlTitle: 'قائمة الجدول',
        icon: 'icon-bank',
        class: ''
    },
    {
        path: '/check-subscriber',
        title: 'Check Subscriber',
        rtlTitle: 'قائمة الجدول',
        icon: 'icon-badge',
        class: ''
    },
    {
        path: '/add-subscriber',
        title: 'Create Subscriber',
        rtlTitle: 'ملف تعريفي للمستخدم',
        icon: 'icon-single-02',
        class: ''
    },
    // {
    //     path: '/icons',
    //     title: 'Icons',
    //     rtlTitle: 'الرموز',
    //     icon: 'icon-atom',
    //     class: ''
    // },
    {
        path: '/notifications',
        title: 'Notifications',
        rtlTitle: 'إخطارات',
        icon: 'icon-bell-55',
        class: ''
    },
    // {
    //     path: '/typography',
    //     title: 'Typography',
    //     rtlTitle: 'طباعة',
    //     icon: 'icon-align-center',
    //     class: ''
    // },
    // {
    //     path: '/rtl',
    //     title: 'RTL Support',
    //     rtlTitle: 'ار تي ال',
    //     icon: 'icon-world',
    //     class: ''
    // }
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
