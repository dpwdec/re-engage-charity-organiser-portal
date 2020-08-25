// previous implementation of mocks for availability testing
const Member = { find: () => ({ lean: () => ({ exec: (callback) => callback(false, {}) }) }) }

const Member = { find: jest.fn() };
Member.find.mockReturnValue({ lean: jest.fn() });
Member.find().lean.mockReturnValue({ exec: (callback) => callback(false, Object.create(null)) });

const HelperFunctions = { getArrayOfCurrentAndNextThreeMonths: jest.fn() };
HelperFunctions.getArrayOfCurrentAndNextThreeMonths.mockReturnValue(["Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020"]);