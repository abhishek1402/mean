import { DemoCRMPage } from './app.po';

describe('demo-crm App', () => {
  let page: DemoCRMPage;

  beforeEach(() => {
    page = new DemoCRMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
