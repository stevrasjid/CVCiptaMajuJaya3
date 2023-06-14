import React, { Component } from "react";
import Button from "@/Elements/Button/Button";
import { Inertia } from "@inertiajs/inertia";

export default class ServicesDashboardList extends Component {
  constructor(props) {
    super(props);
    this.deleteService = this.deleteService.bind(this);
  }

  deleteService = (e, ServiceId) => {
    console.log(ServiceId);
    Inertia.delete(route("deleteService", ServiceId));
  };

  render() {
    const { services } = this.props;
    return (
      <section className="container service-dashboard-list">
        <div className="row pt-4">
          <h3 className="d-flex col">List Layanan</h3>
          <div className="col d-flex justify-content-end ">
            <Button
              type="link"
              href={route("newServiceForm")}
              isPrimary
              isYellow
              isCreateNew
            >
              Tambah Layanan
            </Button>
          </div>
        </div>
        <div className="row col-12 mt-4">
          {services.map((data, i) => {
            return (
              <div className="col-3 mt-3" key={i}>
                <div className="card">
                  <img
                    src={`images/services/${data.ImgService}`}
                    className="card-img-top"
                    alt="Gambar Service"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.ServiceTitle}</h5>
                    <Button
                      type="link"
                      className="btn btn-primary"
                      href={route("getDashboardService", data.ServiceId)}
                    >
                      Edit
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-danger ms-2"
                      onClick={(e) => this.deleteService(e, data.ServiceId)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

// export default function ServicesDashboardList({ services }) {
//   function DeleteData(ServiceId) {
//     console.log(ServiceId);
//     Inertia.delete(route("deleteService", ServiceId));
//   }

//   return (
//     <section className="container service-dashboard-list">
//       <div className="row pt-4">
//         <h3 className="d-flex col">List Layanan</h3>
//         <div className="col d-flex justify-content-end ">
//           <Button
//             type="link"
//             href={route("newServiceForm")}
//             isPrimary
//             isYellow
//             isCreateNew
//           >
//             Tambah Layanan
//           </Button>
//         </div>
//       </div>
//       <div className="row col-12 mt-4">
//         {services.map((data, i) => {
//           return (
//             <div className="col-3 mt-3" key={i}>
//               <div className="card">
//                 <img
//                   src={`images/services/${data.ImgService}`}
//                   className="card-img-top"
//                   alt="Gambar Service"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{data.ServiceTitle}</h5>
//                   <Button
//                     type="link"
//                     className="btn btn-primary"
//                     href={route("getDashboardService", data.ServiceId)}
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     type="link"
//                     className="btn btn-danger ms-2"
//                     onClick={DeleteData(data.ServiceId)}
//                   >
//                     Delete
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
