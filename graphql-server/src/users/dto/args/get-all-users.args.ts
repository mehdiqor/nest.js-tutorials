import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetAllUserArgs {
    @Field(() => [String])
    userIds: string[];
}