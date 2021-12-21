import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';
import { Devenezproprietaire } from "src/app/interfaces/devenezproprietaire";

@Component({
  selector: 'app-list-devenezprop',
  templateUrl: './list-devenezprop.component.html',
  styleUrls: ['./list-devenezprop.component.css']
})
export class ListDevenezpropComponent implements OnInit {
  devenezprop: Observable<Devenezproprietaire[]>;
  p: number = 1;
  deleteMessage = false;

  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.devenezprop = this.DataService.getDevenezProprietaireList();
  }



  devenezpropUpdate(id: number) {
    this.router.navigate(['update-devenezprop', id]);
  }


  devenezpropDelete(id: number) {
    swal.fire({
      title: 'Voulez vous vraiment supprimer cette information de façon permanente ?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('information supprimé !', '', 'success')
        this.devenezprop = this.DataService.getDevenezProprietaireList();

        this.DataService.deleteDevenezProprietaire(id)
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


}

