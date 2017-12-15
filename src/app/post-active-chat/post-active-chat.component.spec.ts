import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostActiveChatComponent } from './post-active-chat.component';

describe('PostActiveChatComponent', () => {
  let component: PostActiveChatComponent;
  let fixture: ComponentFixture<PostActiveChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostActiveChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostActiveChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
