import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
    selector :'[appCustomNgTemplateOutlet]'
})

export class customNgTemplateOutletDirective implements OnChanges {

    constructor(private viewContainerRef : ViewContainerRef) {}

    @Input() appCustomNgTemplateOutlet : TemplateRef<any> | undefined ;

    @Input('appCustomNgTemplateOutletContext')context : any ;  

    ngOnChanges(changes: SimpleChanges): void {
        let currentTemplate = changes['appCustomNgTemplateOutlet'].currentValue ;
        if(currentTemplate) {
            console.log(this.context) ;
            console.log(currentTemplate) ;
            this.viewContainerRef.createEmbeddedView(currentTemplate,this.context) ;
        }
    }

}