import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateUserInput {

    @Field()
    userId?: string;
    
    @Field()
    age?: number;
    
    @Field({ nullable: true})
    isSunbscribed?: boolean;
}