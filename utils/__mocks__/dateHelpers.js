const DateHelpers = jest.genMockFromModule('../dateHelpers');

DateHelpers.getArrayOfCurrentAndNextThreeMonths.mockReturnValue(["Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020"]);

module.exports = DateHelpers;