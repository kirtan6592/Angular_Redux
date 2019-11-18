import { Component, OnInit, ContentChild, ElementRef, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit, AfterContentChecked {


  @ContentChild('name') name: ElementRef;
  source: any =
    {
      localdata:
        [
          ['Alfreds Futterkiste', 'Maria Anders', 'Sales Representative', 'Obere Str. 57', 'Berlin', 'Germany'],
          ['Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Owner', 'Avda. de la Constitucin 2222', 'Mxico D.F.', 'Mexico'],
          ['Antonio Moreno Taquera', 'Antonio Moreno', 'Owner', 'Mataderos 2312', 'Mxico D.F.', 'Mexico'],
          ['Around the Horn', 'Thomas Hardy', 'Sales Representative', '120 Hanover Sq.', 'London', 'UK'],
          ['Berglunds snabbkp', 'Christina Berglund', 'Order Administrator', 'Berguvsvgen 8', 'Lule', 'Sweden'],
          ['Blauer See Delikatessen', 'Hanna Moos', 'Sales Representative', 'Forsterstr. 57', 'Mannheim', 'Germany'],
          ['Blondesddsl pre et fils', 'Frdrique Citeaux', 'Marketing Manager', '24, place Klber', 'Strasbourg', 'France'],
          ['Blido Comidas preparadas', 'Martn Sommer', 'Owner', 'C\/ Araquil, 67', 'Madrid', 'Spain'],
          ['Bon app', 'Laurence Lebihan', 'Owner', '12, rue des Bouchers', 'Marseille', 'France'],
          ['Bottom-Dollar Markets', 'Elizabeth Lincoln', 'Accounting Manager', '23 Tsawassen Blvd.', 'Tsawassen', 'Canada'],
          ['B`s Beverages', 'Victoria Ashworth', 'Sales Representative', 'Fauntleroy Circus', 'London', 'UK'],
          ['Cactus Comidas para llelet', 'Patricio Simpson', 'Sales Agent', 'Cerrito 333', 'Buenos Aires', 'Argentina'],
          ['Centro comercial Moctezuma', 'Francisco Chang', 'Marketing Manager', 'Sierras de Granada 9993', 'Mxico D.F.', 'Mexico'],
          ['Chop-suey Chinese', 'Yang Wang', 'Owner', 'Hauptstr. 29', 'Bern', 'Switzerland'],
          ['Comrcio Mineiro', 'Pedro Afonso', 'Sales Associate', 'Av. dos Lusadas, 23', 'Sao Paulo', 'Brazil'],
          ['Consolidated Holdings', 'Elizabeth Brown', 'Sales Representative', 'Berkeley Gardens 12 Brewery', 'London', 'UK'],
          ['Drachenblut Delikatessen', 'Sven Ottlieb', 'Order Administrator', 'Walserweg 21', 'Aachen', 'Germany'],
          ['Du monde entier', 'Janine Labrune', 'Owner', '67, rue des Cinquante Otages', 'Nantes', 'France'],
          ['Eastern Connection', 'Ann Devon', 'Sales Agent', '35 King George', 'London', 'UK'],
          ['Ernst Handel', 'Roland Mendel', 'Sales Manager', 'Kirchgasse 6', 'Graz', 'Austria']
        ],
      datafields:
        [
          { name: 'CompanyName', type: 'string', map: '0' },
          { name: 'ContactName', type: 'string', map: '1' },
          { name: 'Title', type: 'string', map: '2' },
          { name: 'Address', type: 'string', map: '3' },
          { name: 'City', type: 'string', map: '4' },
          { name: 'Country', type: 'string', map: '5' }
        ],
      datatype: 'array'
    };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] =
    [
      { text: 'Company Name', datafield: 'CompanyName', width: 200, columntype: 'textbox' },
      { text: 'Contact Name', datafield: 'ContactName', width: 150 },
      { text: 'Contact Title', datafield: 'Title', width: 100, columntype: 'checkbox' },
      { text: 'Address', datafield: 'Address', width: 100, columntype: 'numberinput' },
      {
        text: 'City', datafield: 'City', width: 100, columntype: 'datetimeinput', validation: function (cell, value) {
          let year = value.getFullYear();
          if (year >= 2013) {
            return { result: false, message: 'Ship Date should be before 1/1/2013' };
          }
          return true;
        }
      },
      { text: 'Country', datafield: 'Country' },
      {
        text: 'Edit', datafield: 'Edit', columntype: 'button',
        cellsrenderer: (): string => {
          return 'Delete';
        }
      }
    ];

  values: number[] = [102, 115, 130, 137];
  public radioGroupForm: FormGroup;

  title = 'A7Demo';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'model': 1
    });
  }

  ngAfterContentInit(): void {
    // debugger
    console.log(this.name);
  }

  ngAfterContentChecked(): void {
    // debugger
    console.log(this.name);
    // debugger
  }

  onCellBeginEdit(event: any): void {
    let args = event.args;
    let columnDataField = args.datafield;
    let rowIndex = args.rowindex;
    let cellValue = args.value;
  }

  onCellEndEdit(event: any): void {
    let args = event.args;
    let columnDataField = args.datafield;
    let rowIndex = args.rowindex;
    let cellValue = args.value;
    let oldValue = args.oldvalue;
  }

  onPageChanged(event: any): void {
    let args = event.args;
    let pagenumber = args.pagenum;
    let pagesize = args.pagesize;
  }

  onPageSizeChanged(event: any): void {
    let args = event.args;
    let pagenumber = args.pagenum;
    let pagesize = args.pagesize;
  }
}
