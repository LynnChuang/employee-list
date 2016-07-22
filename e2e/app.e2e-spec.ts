import { EmployeeListSystemPage } from './app.po';

describe('employee-list-system App', function() {
  let page: EmployeeListSystemPage;

  beforeEach(() => {
    page = new EmployeeListSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
