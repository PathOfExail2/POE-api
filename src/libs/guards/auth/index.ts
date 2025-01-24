import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request, Response } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const http = context.switchToHttp();
    const request = http.getRequest();
    const response = http.getResponse() as Response;

    const token = this.getTokenFromRequest(request);

    try {
      const payload = await this.jwtService.verifyAsync(token, { secret: '1234' });
      response.locals.user = payload;
    } catch (err) {
      throw new UnauthorizedException('No Authorization about token.');
    }
    return true;
  }

  private getTokenFromRequest(request: Request) {
    const [type, token] = request.get('Authorization')?.split(' ') ?? [];

    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException('No Authorization.');
    }

    return token;
  }
}
