import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe(`AppComponent`, () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it(`should be created`, () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title leagueoflegends`, () => {
    expect(component.title).toBe('leagueoflegends');
  });
});
