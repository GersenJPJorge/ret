import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Http, HttpModule, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.css']
})
export class FooterMenuComponent implements OnInit {

  versao: any = '1.1.10';

  private url = 'https://api.orbitallcartoes.com.br/token';
  data: any = {};
  public ee: any;

  constructor(private http: Http) {
    this.login();
    this.getToken();
  }

  login() {
    const body = 'grant_type=password&username=69341817196&password=e10adc3949ba59abbe56e057f20f883e';

    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic b2xlLXVzZXItdHJ1c3RlZC1jbGllbnQ6b2xlLXNlY3JldA==',
      'systemName': 'ole',
      'companyName': 'Santander',
      'productName': 'appOle',
      'environmentName': 'hml',
      'billingId': '69341817196',
      'location': '-23.499966, -46',
      'model': 'android lollypop',
      'version': '5.1 ',
      'isRoot': 'true',
      'deviceId': 'ADHFGDSGFDJS1',
      'simCard': 'BR011293384573763SP',
      'osName': '',
      'appVersion': ''
    });

    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, body, options)
      .map((res: Response) => res.json());
  }

  getToken() {
    this.login().subscribe(qq => {
      this.ee = qq.tokenBackEnd.OAuth2AccessToken.access_token;
      //console.log(this.ee);
    });
  }


  /*
  versao: any = '1.1.10';

  private url = 'http://address-book-demo.herokuapp.com/api/contacts';
  data: any = {};

  constructor(private http: Http) {
    this.getContacts();
    this.getData();
  }

  getData() {
    return this.http.get(this.url).
      map((res: Response) => res.json());
  }

  getContacts() {
    this.getData().subscribe(data => {
      this.data = data;
    });
  }
  */

  ngOnInit() {
    console.log(this.qq);
  }

}
