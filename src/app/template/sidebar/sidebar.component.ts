import { Component, Input, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/models';
import { NavegationService } from '../../services/navegation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() Menus: MenuModel[];

  constructor(private readonly _navegationPageService: NavegationService) {}

  ngOnInit(): void {}

  selection(id: number) {
    const idString = id.toString();
    const elementMenu = document.getElementById(idString);
    elementMenu.parentElement.classList.toggle('arrow');
    let height = 0;
    if (elementMenu.clientHeight === 0) {
      height = elementMenu.scrollHeight;
    }
    const elementMenuConver = elementMenu as HTMLElement;
    elementMenuConver.style.height = `${height}px`;
  }

  changeStatusNav(pagina: string): void {
    this._navegationPageService.navegationPages(pagina);
  }
}
