function Tabs (props){

  navigateToContact = (e) => {
    e.preventDefault();
    window.location.replace("/");
  };

  return (
    <div className="Tabs">
       <form onSubmit={this.login}>
          <input id="contact" class="button" type="submit" value="contact"></input>
        </form>
    </div>
  );
}




  