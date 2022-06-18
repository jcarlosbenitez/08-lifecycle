import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muesta-nombre',
  templateUrl: './muesta-nombre.component.html',
  styles: [
  ]
})
export class MuestaNombreComponent implements OnInit,OnChanges {
 @Input() nombre!: string
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
