class DriverList extends React.Component {

    constructor() {
      super();
      // this.state = {
      //   members: data,
      // };
    };

    render() {

      // let data = this.state.members.data;

      // go through members table to get ONLY drivers
      // when we do 'data.map' need IF statement to match role = 'driver'
      // if role == 'driver' then we return 
      // data.name
      // data.address

      return(
        <div>
          <h3>Drivers List</h3>
          
          <section class="driver-list">
            <p>Harry Potter SE3 5JP</p>
            <p>Neville Longbottom N8 4YX</p>
          </section>
          

          {/* <table id="driver-list">
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>Harry Potter</td>
              <td>SE3 5JP</td>
            </tr>
            <tr>
              <td>Neville Longbottom</td>
              <td>N8 4YX</td>
            </tr>
          </table> */}
            

        </div>
      )
    }


}