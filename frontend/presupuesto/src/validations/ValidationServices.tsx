export class ValidationService{
    public validateEmail(email:string):boolean{
        email = email.trim();
        const regex:RegExp = /^[A-Za-z]+@[a-z]+\.[a-z]$/;
        return regex.test(email);
    }
    public validateName(name:string):boolean{
        name = name.trim();
        const regex:RegExp = /^$[a-zA-z]{2,50}/;
        return regex.test(name);
    }
    public validatePassword(password:string):boolean{
        password = password.trim();
        return password.length > 8;
    }
    public validateConfirmPassword(password:string,confirmPassword:string):boolean{
        return password.trim() === confirmPassword.trim(); 
    }
    public validateBirthday(birthday:string):boolean{
        return /^\d{2}-d{2}-d{4}$/.test(birthday);
    }
}