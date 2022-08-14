import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';
export class AuthService{
    public createToken(payload:any = {}):String{
        const header = {alg:'HS256',typ:'JWT'};
        const secret = process.env.API_KEY || 'MYAPIKEY';
        const token = jwt.sign(payload,secret,{header,expiresIn:'1h'});
        return token;
    }
    public async validateToken(token:{authorization?:string}):Promise<string | JwtPayload>{
        if(token.authorization)
            return jwt.verify(token.authorization,process.env.API_KEY || 'MYAPIKEY');
            
        return {};
    }
}