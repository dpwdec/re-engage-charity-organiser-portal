class MemberForm extends React.Component {
  render() {
    return (
      <div className="member-form-table shadow-sm p-3 mb-5 bg-white rounded container">
        <h4 id="form-message"></h4>
        <h3>Add a new member</h3>
        <form
          className="form-group mb-2 row"
          id="new-member-form"
          onSubmit={this.props.mySubmitHandler}
        >
          
          <input
            required
            id="new-member-name"
            className="col-2"
            type="text"
            name="name"
            value={this.props.member.name}
            placeholder="name"
            onChange={this.props.onFormChange}
          ></input>
          <input
            required
            className="col-2"
            id="new-member-address"
            type="text"
            name="address"
            value={this.props.member.address}
            placeholder="postcode"
            onChange={this.props.onFormChange}
          ></input>
          <input
            required
            className="col-2"
            id="new-member-telephone"
            type="text"
            name="telephone"
            value={this.props.member.telephone}
            placeholder="telephone"
            onChange={this.props.onFormChange}
          ></input>

          <select
            id="new-member-role"
            className="col-2 custom-select"
            name="role"
            value={this.props.member.role}
            onChange={this.props.onFormChange}
          >
            <option value="driver">driver</option>
            <option value="guest">guest</option>
          </select>

          <input type="submit" value="submit" className="login100-form-btn-small col-2 member-submit"></input>
        </form>
      </div>
    );
  }
}
