const Member = jest.genMockFromModule('../member');

Member.find.mockReturnValue({ lean: jest.fn() });
Member.find().lean.mockReturnValue({ exec: () => Promise.resolve(Object.create(null))});

Member._saveMock = jest.fn()
Member._saveMock.mockReturnValue(Promise.resolve("success"));

Member.mockImplementation(() => {
  return { save: Member._saveMock };
});

module.exports = Member;