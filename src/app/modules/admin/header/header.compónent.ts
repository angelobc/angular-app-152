import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from 'events';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})

export class HeaderComponent{
    @Input() user;
    @Output() logout: EventEmitter<boolean> = new EventEmitter();
}