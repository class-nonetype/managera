import { Injectable, Service, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Credentials } from '../../features/authentication/models/credentials';
import { SignUpData } from '../../features/authentication/models/sign-up-data';


@Service()
export class AuthenticationService {

  private readonly http = inject(HttpClient);


  async signIn(payload: Credentials) {
    await firstValueFrom(this.http.post('/api/auth/sign-in', payload, { withCredentials: true }));
  }

  async signUp(payload: SignUpData) {
    await firstValueFrom(this.http.post('/api/auth/sign-up', payload, { withCredentials: true }));
  }
}
