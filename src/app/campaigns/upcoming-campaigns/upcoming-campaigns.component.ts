import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {
  MatSort,
  MatPaginator,
  MatTableDataSource,
  MatDialogConfig,
  MatIconRegistry
} from '@angular/material';

export interface PeriodicElement {
  campaign: string;
  date: any;
  imageUrl: any;
  actions: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '2021-05-01', campaign: 'WhatsApp', icon: '../../../assets/whatsApp.jpg' , imageUrl: 'https://github.com/SiddAjmera.png', actions: 'H' },
  {date: '2020-04-17', campaign: 'PocketTanks', icon: '../../../assets/pocket-tanks-deluxe.jpg', imageUrl: 'https://github.com/SiddAjmera.png', actions: 'He' },
  {date: '2022-08-12', campaign: 'Instagram', icon: '../../../assets/instagram.jpg', imageUrl: 'https://github.com/SiddAjmera.png', actions: 'Li' },
  {date: '2025-01-10', campaign: 'Gmail', icon: '../../../assets/gmail.png', imageUrl: 'https://github.com/SiddAjmera.png', actions: 'Be' },
  {date: '2026-11-30', campaign: 'Facebook', icon: '../../../assets/fb.png', imageUrl: 'https://github.com/SiddAjmera.png', actions: 'B' },
  {date: '2028-02-24', campaign: 'Google', icon: '../../../assets/google.jpg', imageUrl: 'https://github.com/SiddAjmera.png', actions: 'C' }
];

@Component({
  selector: 'app-upcoming-campaigns',
  templateUrl: './upcoming-campaigns.component.html',
  styleUrls: ['./upcoming-campaigns.component.css']
})
export class UpcomingCampaignsComponent implements OnInit {

  displayedColumns: string[] = ['date', 'campaign', 'imageUrl', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'baseline-calendar_today-24px',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-calendar_today-24px.svg'));
    iconRegistry.addSvgIcon(
        'baseline-note_add-24px',
        sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-note_add-24px.svg'));
    iconRegistry.addSvgIcon(
          'baseline-signal_cellular_alt-24px',
          sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-signal_cellular_alt-24px.svg'));
   }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
