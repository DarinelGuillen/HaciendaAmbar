import "../../assets/style/AdminDashboard.css"
import "../js/chartArea"


function AdminDashboard() {
    return ( 
       <>
          {/*   <!-- Area Chart --> 
                        <div class="col-xl-8 col-lg-7">
                            <div class="card shadow mb-4">
                                 <!-- Card Header - Dropdown --> 
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                 <!-- Card Body --> 
                                <div class="card-body">
                                    <div class="chart-area">
                                        <canvas id="myAreaChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
                                </div>
                                <div class="card-body">
                                    <div class="chart-area">
                                        <canvas id="myAreaChart"></canvas>
                                    </div>
                                    <hr/>
                                    Styling for the area chart can be found in the
                                    <code>/js/chart-area.js</code> file.
                                </div>
                            </div> 
 */}
          <div id="page-top">
            <div id="wrapper">
              <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-7 col-xl-8"> 
                        <div className="card shadow mb-4">
                          <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="text-primary fw-bold m-0">Earnings Overview</h6>
                              <div className="dropdown no-arrow">
                              <button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
                                <i className="fas fa-ellipsis-v text-gray-400"></i>
                              </button>
                              <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                                <p className="text-center dropdown-header">dropdown header:</p>
                                <a className="dropdown-item" href="#">&nbsp;Action</a>
                                <a className="dropdown-item" href="#">&nbsp;Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">&nbsp;Something else here</a>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                              <div className="chart-area">
                                <canvas data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;fontStyle&quot;:&quot;normal&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;fontStyle&quot;:&quot;normal&quot;,&quot;padding&quot;:20}}]}}}"></canvas>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-xl-4">
                        <div className="card shadow mb-4">
                          <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="text-primary fw-bold m-0">Revenue Sources</h6>
                            <div className="dropdown no-arrow">
                              <button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
                                <i className="fas fa-ellipsis-v text-gray-400"></i>
                              </button>
                              <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                                <p className="text-center dropdown-header">dropdown header:</p>
                                <a className="dropdown-item" href="#">&nbsp;Action</a>
                                <a className="dropdown-item" href="#">&nbsp;Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">&nbsp;Something else here</a>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="chart-area">
                              <canvas data-bss-chart="{&quot;type&quot;:&quot;doughnut&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Direct&quot;,&quot;Social&quot;,&quot;Referral&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;&quot;,&quot;backgroundColor&quot;:[&quot;#4e73df&quot;,&quot;#1cc88a&quot;,&quot;#36b9cc&quot;],&quot;borderColor&quot;:[&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;],&quot;data&quot;:[&quot;50&quot;,&quot;30&quot;,&quot;15&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}}}"></canvas>
                            </div>
                            <div className="text-center small mt-4">
                              <span className="me-2">
                              <i className="fas fa-circle text-primary"></i>&nbsp;Direct</span>
                              <span className="me-2"><i className="fas fa-circle text-success"></i>&nbsp;Social</span>
                              <span className="me-2"><i className="fas fa-circle text-info"></i>&nbsp;Refferal</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                          <div className="card-header py-3">
                            <h6 className="text-primary fw-bold m-0">Projects</h6>
                          </div>
                          <div className="card-body">
                            <h4 className="small fw-bold">Server migration<span className="float-end">20%</span></h4>
                            <div className="progress mb-4">
                              <div className="progress-bar bg-danger claseDashBoard" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" >
                                <span className="visually-hidden">20%</span>
                              </div>
                            </div>
                            <h4 className="small fw-bold">Sales tracking<span className="float-end">40%</span></h4>
                            <div className="progress mb-4">
                              <div className="progress-bar bg-warning claseDashBoard2" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                                <span className="visually-hidden">40%</span>
                              </div>
                            </div>
                            <h4 className="small fw-bold">Customer Database<span className="float-end">60%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-primary claseDashBoard3" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" >
                                  <span className="visually-hidden">60%</span>
                                </div>
                            </div>
                            <h4 className="small fw-bold">Payout Details<span className="float-end">80%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-info claseDashBoard4" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" >
                                  <span className="visually-hidden">80%</span>
                                </div>
                            </div>
                            <h4 className="small fw-bold">Account setup<span className="float-end">Complete!</span></h4>
                            <div className="progress mb-4">
                              <div className="progress-bar bg-success claseDashBoard5" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
                                <span className="visually-hidden">100%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                       

                      </div>
                    </div>
                  </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
                </div>
              </div>
            </div>
          </div> 
       </>

     );
}

export default AdminDashboard;