jest.mock('../../models/member');
const Member = require('../../models/member');

var MemberController = require("../../controllers/member");

describe("Homepage Controller", () => {
  let res, req;

  beforeEach(() => {
    res = { status: jest.fn() }
    res.status.mockReturnValue({ send: jest.fn() })
    req = {};
  });

  describe("Members List", () => {
    it("sends member data", async () => {
      controller = MemberController.Members(Member);
      req = { query: { role: "" } };

      await controller(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status().send).toHaveBeenCalledWith({});
    });

    it("sends error if members query fails", async () => {
      Member.find().lean.mockReturnValue({ exec: () => Promise.reject(new Error()) });
      controller = MemberController.Members(Member);
      req = { query: { role: "Error" } };

      await controller(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.status().send).toHaveBeenCalledWith({message: "Error"});
      expect(res.status).not.toHaveBeenCalledWith(200);
    });
  });

  describe("Create Member", () => {
    it("saves a new member to the database && returns OK", async () => {
      req.body = { name: "Paula", role: "guest", address: "N8 2AA" };
      controller = MemberController.CreateMember(Member);

      await controller(req, res);

      expect(Member._saveMock).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status().send).toHaveBeenCalledWith({ message: "ok" });
    });

    it("send an error && status code 500 if saving raises an error", async () => {
      req.body = { name: "Paula", role: "guest", address: "N8 2AA" };
      Member._saveMock.mockReturnValue(Promise.reject(new Error()));
      controller = MemberController.CreateMember(Member);

      await controller(req, res);

      expect(Member._saveMock).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.status().send).toHaveBeenCalledWith({ message: "Error" });
    });
  });

  describe("Delete Member", () => {
    it("deletes a member from the database", async () => {
      req.body = { id: "1" };
      controller = MemberController.DeleteMember(Member);

      await controller(req, res);

      expect(Member.deleteOne).toHaveBeenCalledWith({ _id: "1" });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status().send).toHaveBeenCalledWith({ message: "success!" });
    });

    it("sends an error && status code 500 if deletion fails", async () => {
      req.body = { id: "1" };
      Member.deleteOne.mockReturnValue(Promise.reject(new Error()));
      controller = MemberController.DeleteMember(Member);

      await controller(req, res);

      expect(Member.deleteOne).toHaveBeenCalledWith({ _id: "1" });
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.status().send).toHaveBeenCalledWith({ message: "Error" });
    });
  });
});
