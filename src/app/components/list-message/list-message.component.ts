import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import { Message } from "src/app/interfaces/message";
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {
  message: Observable<Message[]>;
  p: number = 1;
  deleteMessage = false;

  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.message = this.DataService.getMessageList();
  }




  messageDelete(id: number) {

    swal.fire({
      title: 'Voulez vous vraiment supprimer cet message de façon permanente ?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('Contact supprimé !', '', 'success')
        this.message = this.DataService.getMessageList();

        this.DataService.deleteMessage(id)
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
