import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app and count should be start at zero', () => {
    const countElement =  fixture.nativeElement.querySelector('[data-testid="count"]')
    expect(component.count).toEqual(0);
    expect(countElement.textContent.trim()).toEqual('0')
  });

  it('increment', () => {
    const incrementButton = fixture.nativeElement.querySelector('[data-testid="increment"]');
    const countElement =  fixture.nativeElement.querySelector('[data-testid="count"]')

    incrementButton.click();

    fixture.detectChanges();

    expect(component.count).toEqual(1);
    expect(countElement.textContent.trim()).toEqual('1')

  });

  it('decrement', () => {

    const decrementButton = fixture.nativeElement.querySelector('[data-testid="decrement"]');
    const countElement =  fixture.nativeElement.querySelector('[data-testid="count"]')

    component.count = 2;

    fixture.detectChanges();

    expect(countElement.textContent.trim()).toEqual('2')


    decrementButton.click();

    fixture.detectChanges();

    expect(component.count).toEqual(1);
    expect(countElement.textContent.trim()).toEqual('1')

    expect(component.count).toEqual(1);
  });
  it('does not decrement after 0', () => {
    const decrementButton = fixture.nativeElement.querySelector('[data-testid="decrement"]');
    const countElement =  fixture.nativeElement.querySelector('[data-testid="count"]')

    component.count = 0

    decrementButton.click();

    fixture.detectChanges();


    expect(countElement.textContent.trim()).toEqual('0')

    expect(component.count).toEqual(0);
  });




});
