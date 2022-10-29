import { HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpInterceptor } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'})
    
/**el interceptor pregunta si el token es valido y si no lo es pide que te vuelvas a logear  */
export class InterceptorService implements HttpInterceptor{
    constructor(private tokenService: TokenService){}

        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
            let intReq = req;
            const token = this.tokenService.getToken();
            if(token!= null){
                intReq = req.clone({
                    headers: req.headers.set('Authorization', 'Bearer' + token)
                });
            }
            return next.handle(intReq);
    }
}

export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}];