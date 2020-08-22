const Member = jest.genMockFromModule('../member');

Member.find.mockReturnValue({ lean: jest.fn() });
Member.find().lean.mockReturnValue({ exec: (callback) => callback(false, Object.create(null)) });

module.exports = Member;