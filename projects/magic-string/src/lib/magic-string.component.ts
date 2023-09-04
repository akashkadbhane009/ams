  import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

  @Component({
    selector: 'ak-magic-string',
    template: `

      <input type="text" (keydown.enter)="marktext($event)">
      <div #content [hidden]="true">
        <ng-content select=".text"></ng-content>
      </div>

      <div [innerHTML]="controlledContent"></div>
    `,
    styles: [
      `.mark {background-color: yellow}`
    ],
    encapsulation : ViewEncapsulation.None
  })
  export class MagicStringComponent implements OnInit {
    @ViewChild('content') content!: ElementRef<any>;

    orinalContenet: string = '';
    controlledContent: string = '';
    constructor(private changeDetectorRef: ChangeDetectorRef) {}
    ngOnInit(): void {
      // this.controlledContent = this.orinalContenet = this.content.nativeElement.textContent;

    }
    ngAfterViewInit(): void {
      this.controlledContent = this.orinalContenet = this.content.nativeElement.textContent;

    }
    marktext(event: any) {
      console.log(event.target.value)
      this.controlledContent = this.orinalContenet;
      this.controlledContent =this.orinalContenet.replace(new RegExp(event.target.value, 'g'),match => `<span class="mark">${match}</span>`);
      this.changeDetectorRef.detectChanges();
    }
  }
