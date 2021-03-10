import {Component, Input, OnInit} from '@angular/core'
import { SettingsService } from 'src/app/core/services/settings/settings.service';
import { Settings } from 'src/app/shared/models/settings.model';

@Component({
    selector: 'mindmapp-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    public settings:Settings;
    constructor (private settingsService: SettingsService) {
        this.settings = this.settingsService.getCachedSettings();
    }

    ngOnInit () {
    }

}
