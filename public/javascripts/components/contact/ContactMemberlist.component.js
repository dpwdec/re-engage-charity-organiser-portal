function MemberList(props) {
  return (
    <div>
      <h2>List of {props.role}</h2>
      <div className={props.role + "-list col-5"}>
        <div className="headers row">
          <div className="name">Name</div>
          <div className="name">Address</div>
          <div className="name">Telephone</div>
        </div>
        {props.members.map((member, index) => (
          <Member
            name={member.name}
            address={member.address}
            telephone={member.telephone}
            role={props.role}
            index={index}
            id={member._id}
            key={member._id}
            deleteMember={props.deleteMember}
          />
        ))}
      </div>
    </div>
  );
}
