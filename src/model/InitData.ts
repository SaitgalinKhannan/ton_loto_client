import {User} from "./User.ts";

export interface InitData {
    query_id: string;
    user: User;
    auth_date: number;
    hash: string;
}