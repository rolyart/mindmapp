import {Component, Input} from '@angular/core'
import {MmpService} from '../../../../core/services/mmp/mmp.service'

@Component({
    selector: 'mindmapp-sliders-panel',
    templateUrl: './slider-panels.component.html',
    styleUrls: ['./slider-panels.component.scss']
})
export class SliderPanelsComponent {

    nodeSizeRange:Array<number> = [16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 48, 56, 72, 96 ];
    @Input() public node: any

    constructor (public mmpService: MmpService) {
    }

    public updateNodeFontSize (event: any, graphic?: boolean) {
        const value = parseInt(event.source.value)
        console.log(value, graphic)
        this.mmpService.updateNode('fontSize', value, graphic)
    }

    public updateNodeImageSize (event: any, graphic?: boolean) {
        const value = parseInt(event.source.value)
        this.mmpService.updateNode('imageSize', value, graphic)
    }

    public onChangeFontsize(event:any, graphic?: boolean){
        const value = event.value;
        this.mmpService.updateNode('fontSize', value, graphic);
        this.node.font.size = event.value;
        
    }

}
