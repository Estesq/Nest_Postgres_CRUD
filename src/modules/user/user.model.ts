import { Column, Entity } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

@Entity('hello')

@ObjectType()

export class hello{
    @Column()
    @Field({nullable: true})
    msg: String;
}