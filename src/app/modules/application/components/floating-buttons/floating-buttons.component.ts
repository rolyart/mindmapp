import {Component, OnInit} from '@angular/core'
import { SettingsService } from 'src/app/core/services/settings/settings.service'
import { Settings } from 'src/app/shared/models/settings.model'
import {MmpService} from '../../../../core/services/mmp/mmp.service'

@Component({
    selector: 'mindmapp-floating-buttons',
    templateUrl: './floating-buttons.component.html',
    styleUrls: ['./floating-buttons.component.scss']
})
export class FloatingButtonsComponent implements OnInit {

    public readonly grids: boolean;
    public settings:Settings;

    constructor (public mmpService: MmpService, private settingsService: SettingsService) {
        this.grids = SettingsService.GRIDS;
        this.settings = this.settingsService.getCachedSettings();
    }

    ngOnInit () {
    }

    public async toggleGrids () {
        this.settings.general.grids = !this.settings.general.grids;
        await this.settingsService.updateCachedSettings(this.settings);
    }

}
