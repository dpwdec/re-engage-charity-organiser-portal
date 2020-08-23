const Member = jest.genMockFromModule('../member');

Member.find.mockReturnValue({ lean: jest.fn() });
Member.find().lean.mockReturnValue({ exec: (callback) => callback(false, Object.create(null)) });

Member._saveMock = jest.fn()

Member.mockImplementation(() => {
  return { save: Member._saveMock };
});

module.exports = Member;