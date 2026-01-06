import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class StatusServices {

    caseExample = [
    {
      code: "A1234",
      name: "Alexander",
      lastName: "Ramirez",
      date: new Date,
      description: "This is the description of the case",
      status: "Pending"
    },

    {
      code: "B5678",
      name:"Elias",
      lastName: "Morales",
      date: new Date,
      description: "This is the description of the case",
      status: "Resolved"
    }
  ]

}