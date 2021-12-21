import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import { Contact } from "src/app/interfaces/contact";
import swal from 'sweetalert2';


@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  contact: Observable<Contact[]>;
  p: number = 1;
  deleteMessage = false;

  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.contact = this.DataService.getContactList();
  }




  contactDelete(id: number) {
    swal.fire({
      title: 'Voulez vous vraiment supprimer cet contact de façon permanente ?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('Contact supprimé !', '', 'success')
        this.contact = this.DataService.getContactList();

        this.DataService.deleteContact(id)
          .subscribe(
            data => {
              console.log(data);
              this.deleteMessage = true;
              this.ngOnInit()
            },
            error => console.log(error));
      }
    })
  }



  contactUpdate(id: number) {
    this.router.navigate(['update-contact', id]);
  }



}
