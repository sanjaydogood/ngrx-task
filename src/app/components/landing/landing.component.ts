import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { retry } from 'rxjs/operators';
import { TokenResponseBody } from 'src/app/shared/models/http/tokenResponseBody.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  apiAuthSubscription$: Subscription;
  receivedAuthToken: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('AUTH_TOKEN');
    if (!token) {
      this.apiAuthSubscription$ = this.apiService
        .getApiData<TokenResponseBody>(
          environment.GET_TOKEN_URL,
          environment.GET_TOKEN_REQUEST_HEADER
        )
        .pipe(retry(3))
        .subscribe((payload: TokenResponseBody) => {
          environment.AUTH_TOKEN = payload.auth_token;
          this.receivedAuthToken = true;
          sessionStorage.setItem('AUTH_TOKEN', environment.AUTH_TOKEN);
        });
    } else {
      this.receivedAuthToken = true;
      environment.AUTH_TOKEN = sessionStorage.getItem('AUTH_TOKEN');
    }
  }

  countriesNavigate(): void {
    this.router.navigate(['/countries']);
  }

  statesNavigate(): void {
    this.router.navigate(['/states']);
  }

  citiesNavigate(): void {
    this.router.navigate(['/cities']);
  }

  ngOnDestroy(): void {
    if (!this.receivedAuthToken) {
      this.apiAuthSubscription$.unsubscribe();
    }
  }
}
