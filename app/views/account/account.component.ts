import { Component, OnInit, NgZone } from "@angular/core";
import { FirebaseService, BackendService } from "../../shared/services";
import { User } from '../../shared/models';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: "uc-account",
    templateUrl: "./views/account/account.html",
    styleUrls: ["./views/account/account.css"]
})

export class AccountComponent implements OnInit {
    constructor(
        private fireBaseService: FirebaseService,
        private ngZone: NgZone
    ) { }
    public user: User; 

    ngOnInit(): void {
        this.fireBaseService.getCurrentUser().subscribe((user) => {
            this.user = new User(user.email, user.password);
        });
    }
}