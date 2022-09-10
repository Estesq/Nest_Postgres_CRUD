import { Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { hello } from './user.model'

@Resolver()

export class UserResolver{
    constructor( 
        private readonly userService: UserService
    ){}

    @Query(returns =>hello,{name:'hello'})
    async HelloWorld() {
        return this.userService.HelloWorld()
    }
}