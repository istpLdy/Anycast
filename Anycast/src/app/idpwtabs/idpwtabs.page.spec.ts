import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdpwtabsPage } from './idpwtabs.page';

describe('IdpwtabsPage', () => {
  let component: IdpwtabsPage;
  let fixture: ComponentFixture<IdpwtabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IdpwtabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
