import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs";
import { Observable } from 'rxjs'
import { HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';


import { Appartement } from '../interfaces/appartement';
import { Projet } from '../interfaces/projet';
import { Contact } from '../interfaces/contact';
import { Devenezproprietaire } from '../interfaces/devenezproprietaire';
import { Message } from '../interfaces/message';
import { Presentation } from '../interfaces/presentation';
import { Video } from '../interfaces/video';



@Injectable({
  providedIn: 'root'
})


export class DataService {


  // -------------------------------- Appartement ---------------------------------------- //
  private appartement = 'https://fathallahapi.herokuapp.com/api/appartement';
  private appartementnb = 'https://fathallahapi.herokuapp.com/api/countappartement';


  // -------------------------------- Projet -------------------------------------------- //
  private projet = 'https://fathallahapi.herokuapp.com/api/projet';
  private projetnb = 'https://fathallahapi.herokuapp.com/api/countproject';
  private nombreencours = 'https://fathallahapi.herokuapp.com/api/countsencours';


  // -------------------------------- Contact -------------------------------------------- //
  private contact = 'https://fathallahapi.herokuapp.com/api/contact';


  // -------------------------------- DevenezProprietaire -------------------------------- //
  private devenezProprietaire = 'https://fathallahapi.herokuapp.com/api/devenezProprietaire';


  // -------------------------------- Message -------------------------------------------- //
  private message = 'https://fathallahapi.herokuapp.com/api/message';
  private messagenb = 'https://fathallahapi.herokuapp.com/api/countmessage';


  // -------------------------------- Presentation --------------------------------------- //
  private presentation = 'https://fathallahapi.herokuapp.com/api/presentation';


  // -------------------------------- Video ---------------------------------------------- //
  private video = 'https://fathallahapi.herokuapp.com/api/video';
  private videonb = 'https://fathallahapi.herokuapp.com/api/countvideo';


  // -------------------------------- Actualites --------------------------------------- //
  private actualite = 'https://fathallahapi.herokuapp.com/api/actualite';



  id = new Rx.BehaviorSubject({});

  constructor(private http: HttpClient) { }





  // ---------------- Appartement ------------------- //

  getAppartementList(): Observable<any> { return this.http.get(this.appartement); }

  getAppartement(id: number): Observable<any> { return this.http.get(`${this.appartement}/${id}`); }

  createAppartement(appartement: Object): Observable<Object> { return this.http.post(`${this.appartement}`, appartement); }

  updateAppartement(appartement: Appartement): Observable<Object> { return this.http.put<Appartement>(this.appartement, appartement, { observe: 'response' }) }

  deleteAppartement(id: number): Observable<any> { return this.http.delete(`${this.appartement}/${id}`); }

  countAppartement(): Observable<number> {return this.http.get<number>(`${this.appartementnb}`);}


  // ---------------- Projet ------------------- //

  getProjetList(): Observable<any> { return this.http.get(this.projet); }

  getProjet(id: number): Observable<any> { return this.http.get(`${this.projet}/${id}`); }

  createProjet(projet: Object): Observable<Object> { return this.http.post(`${this.projet}`, projet); }

  updateProjet(projet: Projet): Observable<Object> { return this.http.put<Projet>(this.projet, projet, { observe: 'response' }) }

  deleteProjet(id: number): Observable<any> { return this.http.delete(`${this.projet}/${id}`); }

  getnumberofencours(): Observable<number>{return this.http.get<number>(`${this.nombreencours}`);}
  
  countProjet(): Observable<number> {return this.http.get<number>(`${this.projetnb}`);}

  // ---------------- Contact ------------------- //

  getContactList(): Observable<any> { return this.http.get(this.contact); }

  getContact(id: number): Observable<any> { return this.http.get(`${this.contact}/${id}`); }

  createContact(contact: Object): Observable<Object> { return this.http.post(`${this.contact}`, contact); }

  updateContact(contact: Contact): Observable<Object> { return this.http.put<Contact>(this.contact, contact, { observe: 'response' }) }

  deleteContact(id: number): Observable<any> { return this.http.delete(`${this.contact}/${id}`); }


  // ---------------- DevenezProprietaire ------------------- //

  getDevenezProprietaireList(): Observable<any> { return this.http.get(this.devenezProprietaire); }

  getDevenezProprietaire(id: number): Observable<any> { return this.http.get(`${this.devenezProprietaire}/${id}`); }

  createDevenezProprietaire(devenezProprietaire: Object): Observable<Object> { return this.http.post(`${this.devenezProprietaire}`, devenezProprietaire); }

  updateDevenezProprietaire(devenezProprietaire: Devenezproprietaire): Observable<Object> { return this.http.put<Devenezproprietaire>(this.devenezProprietaire, devenezProprietaire, { observe: 'response' }) }

  deleteDevenezProprietaire(id: number): Observable<any> { return this.http.delete(`${this.devenezProprietaire}/${id}`); }


  // ---------------- Message ------------------- //

  getMessageList(): Observable<any> { return this.http.get(this.message); }

  getMessage(id: number): Observable<any> { return this.http.get(`${this.message}/${id}`); }

  createMessage(message: Object): Observable<Object> { return this.http.post(`${this.message}`, message); }

  updateMessage(message: Message): Observable<Object> { return this.http.put<Message>(this.message, message, { observe: 'response' }) }

  deleteMessage(id: number): Observable<any> { return this.http.delete(`${this.message}/${id}`); }

  countMessage(): Observable<number> {return this.http.get<number>(`${this.messagenb}`);}


  // ---------------- Presentation ------------------- //

  getPresentationList(): Observable<any> { return this.http.get(this.presentation); }

  getPresentation(id: number): Observable<any> { return this.http.get(`${this.presentation}/${id}`); }

  createPresentation(presentation: Object): Observable<Object> { return this.http.post(`${this.presentation}`, presentation); }

  updatePresentation(presentation: Presentation): Observable<Object> { return this.http.put<Presentation>(this.presentation, presentation, { observe: 'response' }) }

  deletePresentation(id: number): Observable<any> { return this.http.delete(`${this.presentation}/${id}`); }


  // ---------------- Video ------------------- //

  getVideoList(): Observable<any> { return this.http.get(this.video); }

  getVideo(id: number): Observable<any> { return this.http.get(`${this.video}/${id}`); }

  createVideo(videos: Object): Observable<Object> { return this.http.post(`${this.video}`, videos); }

  updateVideo(video: Video): Observable<Object> { return this.http.put<Video>(this.video, video, { observe: 'response' }) }

  deleteVideo(id: number): Observable<any> { return this.http.delete(`${this.video}/${id}`); }

  countVideo(): Observable<number> {return this.http.get<number>(`${this.videonb}`);}


   // ---------------- Actualites ------------------- //

   getActualiteList(): Observable<any> { return this.http.get(this.actualite); }

   getActualite(id: number): Observable<any> { return this.http.get(`${this.actualite}/${id}`); }
 
   createActualite(actualite: Object): Observable<Object> { return this.http.post(`${this.actualite}`, actualite); }

   deleteActualite(id: number): Observable<any> { return this.http.delete(`${this.actualite}/${id}`); }

}
