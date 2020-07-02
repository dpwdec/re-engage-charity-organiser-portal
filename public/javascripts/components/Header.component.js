
class Header extends React.Component {

  render() {
    return (
      <div className="header">
          <div className="d-flex flex-row-reverse">
            <AdminLogOut /> 
          </div>
        <p className="text-center"><img className="container-fluid col-4" src="../../images/logo.svg"></img></p>
      </div>
    );
  }
}

