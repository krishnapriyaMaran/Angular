import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';

import { RestComponent } from './rest.component';

describe('RestComponent', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [RestComponent]
      });
    });

    it('should be created', inject([RestComponent], (service: RestComponent) => {
      expect(service).toBeTruthy();
    }));
  });

/*describe('RestComponent', () => {
  let component: RestComponent;
  let fixture: ComponentFixture<RestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/
