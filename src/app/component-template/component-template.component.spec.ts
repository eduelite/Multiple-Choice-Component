import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTemplateComponent } from './component-template.component';

describe('ComponentTemplateComponent', () => {
  let component: ComponentTemplateComponent;
  let fixture: ComponentFixture<ComponentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
