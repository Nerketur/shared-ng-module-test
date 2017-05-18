import { SharedModuleTestPage } from './app.po';

describe('shared-module-test App', () => {
  let page: SharedModuleTestPage;

  beforeEach(() => {
    page = new SharedModuleTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
