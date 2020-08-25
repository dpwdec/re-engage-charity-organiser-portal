const DateHelpers = require("../../utils/dateHelpers");

DateHelpers.getArrayOfCurrentAndNextThreeMonths();

describe("Date Helpers", () => {
  it("returns the current and next three months", () => {
    global.Date = jest.fn();
    global.Date.mockImplementation(() => {
      return {
        getFullYear: () => 2020,
        getMonth: () => 6
      }
    });

    expect(DateHelpers.getArrayOfCurrentAndNextThreeMonths()).toEqual(['Jul 2020', 'Aug 2020', 'Sep 2020', 'Oct 2020',]);
  });
});