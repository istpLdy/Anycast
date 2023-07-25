import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Idpwtab1Page } from './idpwtab1.page';

describe('Idpwtab1Page', () => {
  let component: Idpwtab1Page;
  let fixture: ComponentFixture<Idpwtab1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Idpwtab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
