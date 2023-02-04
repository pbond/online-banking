import IService from "../types/interfaces/IService";
import servicesData from "../data/services";

class ServicesAPI {
  fetchServices(): IService[] {
    let res: IService[] = []
    if (localStorage.getItem("services")) {
      const data = JSON.parse(localStorage.getItem("services") || "")
      if (Array.isArray(data)) res = data
    } else {
      res = servicesData
    }
    return res
  }

  createService(serviceData: IService): IService[] | Error {

    if (!localStorage.getItem("services")) {
      let servicesNew: IService[] = [serviceData]
      localStorage.setItem("services", JSON.stringify(servicesNew))
      return servicesNew
    } else {
      let services = JSON.parse((localStorage.getItem("services") || "")) as IService[]
      let servicesWithCode = services.find(service => service.code === serviceData.code)

      if (!servicesWithCode) {
        let servicesNew: IService[] = [...services, serviceData]
        localStorage.setItem("services", JSON.stringify(servicesNew))
        return servicesNew
      } else {
        throw new Error("A service with this code exists")
      }
    }
  }


}

const servicesAPI = new ServicesAPI();
export default servicesAPI;