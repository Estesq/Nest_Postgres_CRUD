import { Injectable } from '@nestjs/common'

@Injectable()

export class UserService{
    HelloWorld(){
        return { msg: 'Hello Workd !!!'}
    }
}