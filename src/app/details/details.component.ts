import { Component, OnInit, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-dialog',
  template: `
  <h2>codigo detalle: {{ data.id }}</h2>
  <p><strong>Categoría:</strong> {{ data.name }}</p>
  <p><strong>Descripción:</strong> {{ data.description }}</p>
  <p><strong>modified:</strong> {{ data.modified }}</p>
  <p><strong>resourceURI:</strong> {{ data.resourceURI }}</p>
  <p><strong>commics:</strong> {{ data.comics.available }}</p>
  <p><strong>returned:</strong> {{ data.comics.returned }}</p>
  <p><strong>collectionURI:</strong> {{ data.comics.collectionURI }}</p>
  <!-- Y muchos mas datos a mostrar ....... -->
`,
})
export class DetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
