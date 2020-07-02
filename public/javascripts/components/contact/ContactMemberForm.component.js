class MemberForm extends React.Component {

  render() {
    return(
      <div>
        <h4 id="form-message"></h4>

        <form id="new-member-form" onSubmit={this.props.mySubmitHandler} >
          <h3>Add a new member</h3>
          <input required id="new-member-name" type="text" name="name" value={this.props.member.name} placeholder="name" onChange={this.props.onFormChange} ></input>
          <input required id="new-member-address" type="text" name="address" value={this.props.member.address} placeholder="postcode" onChange={this.props.onFormChange} ></input>
          <input required id="new-member-telephone" type="text" name="telephone" value={this.props.member.telephone} placeholder="telephone" onChange={this.props.onFormChange} ></input>
          <select id="new-member-role" name="role" value={this.props.member.role} onChange={this.props.onFormChange}>
            <option value="driver">driver</option>
            <option value="guest">guest</option>
          </select>

          <input type="submit" value="Submit" className="login100-form-btn-small"></input>
        </form>

       
      </div>
    )
  }
}
