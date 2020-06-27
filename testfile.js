<div class="container">
            <div class="row">
              <div class="col-xs-12 ">
                <nav>
                  <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" onClick={this.changeLocationMap} role="tab" aria-controls="nav-profile" aria-selected="false">Maps</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" onClick={this.changeLocationContact} role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                  </div>
                </nav>
                <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="nav-home-tab">
                    {/* <form action="/"> */}
                    <MemberForm updatemethod={this.updateState} />

                    {/* </form>   */}
                  </div>
                  <div class="tab-pane fade" id="map" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <form action="/">
                    <GuestList />
                    <DriverList />
                    </form>  
                  </div>
                  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="nav-about-tab">
                    {/* <MemberForm updatemethod={this.updateState} />
                    <DriverList updatemethod={this.updateState} />
                    <GuestList /> */}
                    {/* <form action="/admin/login">
                      <AdminLogin />
                    </form>   */}
                  </div>
                </div>
              
          </div>
            </div>
        </div>