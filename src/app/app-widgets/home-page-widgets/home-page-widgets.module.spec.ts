import { HomePageWidgetsModule } from './home-page-widgets.module';

describe('HomePageWidgetsModule', () => {
  let homePageWidgetsModule: HomePageWidgetsModule;

  beforeEach(() => {
    homePageWidgetsModule = new HomePageWidgetsModule();
  });

  it('should create an instance', () => {
    expect(homePageWidgetsModule).toBeTruthy();
  });
});
