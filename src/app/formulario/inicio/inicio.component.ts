import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, forkJoin, merge } from 'rxjs';
import { SubPagestatus } from 'src/app/mock/sub-page-status.mock';
import { NavegationService } from 'src/app/services/navegation.service';
import { HomePageName } from 'src/app/utils/enum/page-main/home-page-name.enum';
import { GeneralData } from 'src/app/utils/enum/sections/genetal-data.enum';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit, AfterViewInit {
  @ViewChild('primero', { static: false })
  private testDiv: ElementRef<HTMLDivElement>;
  isTestDivScrolledIntoView: boolean;
  subPagestatus = SubPagestatus;
  pageName = HomePageName['Datos generales'];
  homePageName: any;
  pageStatusList: boolean[] = [];
  generalData = GeneralData;
  form1!: FormGroup;
  form2!: FormGroup;

  constructor(
    private readonly _navigationPages: NavegationService,
    private readonly fb: FormBuilder
  ) {}

  ngAfterViewInit() {
    this.changeEstadoNav();
  }
  ngOnInit(): void {
    this.initHomePageStatus();
    this.initForm1();
    this.initForm2();
    this.observeValuesForms();
  }
  onElement(value: any, targer: string) {
    console.log(value, targer);
  }

  // @HostListener('window:scroll', ['$event'])
  // isScrolledIntoView() {
  //   if (this.testDiv) {
  //     const rect = this.testDiv.nativeElement.getBoundingClientRect();
  //     const topShown = rect.top <= 0;
  //     const bottomShown = rect.bottom >= 0;
  //     // const bottomShown = rect.bottom >= window.innerHeight;
  //     this.isTestDivScrolledIntoView = topShown && bottomShown;
  //     console.log(window.scrollY, rect, 'este es el estado del scroll');
  //   }
  // }
  observeValuesForms() {
    const observables = [this.form1.valueChanges, this.form2.valueChanges];
    merge(...observables).subscribe((data) => {
      console.log(data, 'sdasdasd');
      this.evaluatePageStatus();
    });
  }
  initHomePageStatus() {
    this._navigationPages.pageListMain$.subscribe((data) => {
      this.homePageName = data;
    });
  }
  evaluatePageStatus() {
    this.pageStatusList = [];
    this.subPagestatus['Datos básicos'] = this.form1.valid;
    this.subPagestatus['Datos de constitución'] = this.form2.valid;
    this.pageStatusList.push(this.form1.valid);
    this.pageStatusList.push(this.form2.valid);
    const found = !this.pageStatusList.includes(false);
    const send = this.homePageName;
    send[this.pageName] = found;
    this._navigationPages.pageListMain(send);
    this._navigationPages.subListMain(this.subPagestatus);
  }
  get details() {
    return this.form1.get('details') as FormArray;
  }
  get details2() {
    return this.form2.get('details2') as FormArray;
  }
  agregar() {
    const subform = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
    });
    this.details.push(subform);
  }

  remove(indice: number) {
    this.details.removeAt(indice);
  }

  agregar2() {
    console.log('ta loco he');
    const subform2 = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
    });
    this.details2.push(subform2);
  }

  remove2(indice: number) {
    this.details2.removeAt(indice);
  }

  private initForm1(): void {
    this.form1 = this.fb.group({
      number1: [null, Validators.required],
      details: this.fb.array([]),
    });
  }

  private initForm2(): void {
    this.form2 = this.fb.group({
      number1: [null, Validators.required],
      details2: this.fb.array([]),
    });
  }
  elemetoHtmlSeleccionado(alias: string) {
    const primer = document.getElementById(alias);
    primer?.scrollIntoView({ behavior: 'smooth' });
  }

  changeEstadoNav(): void {
    this._navigationPages.paginaSection$
      // .pipe(takeUntil(this.stop$))
      .subscribe((pagina: string) => {
        this.elemetoHtmlSeleccionado(pagina);
      });
  }
}
