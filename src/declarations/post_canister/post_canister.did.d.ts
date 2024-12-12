import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface CanisterMetaData {
  'controllers' : Array<Principal>,
  'canister_ids' : Array<[string, Principal]>,
}
export interface CommentBody {
  'creator' : Principal,
  'content' : string,
  'created_at' : bigint,
  'comment_id' : bigint,
}
export interface CreatePostArgs {
  'content' : string,
  'video' : [] | [Video],
  'post_visibility' : PostVisibility,
  'image' : [] | [Array<Video>],
  'price' : [] | [bigint],
  'post_status' : PostStatus,
}
export interface GetByPostStatusArgs {
  'status' : PostStatus,
  'pagination' : Pagination,
}
export type Membership = { 'Diamond' : null } |
  { 'Guest' : null };
export interface Pagination { 'end' : bigint, 'start' : bigint }
export interface Post {
  'views_count' : bigint,
  'post_id' : bigint,
  'content' : string,
  'creator_id' : Principal,
  'video' : [] | [Video],
  'views' : Array<Principal>,
  'like_count' : bigint,
  'post_visibility' : PostVisibility,
  'created_at' : bigint,
  'likes' : Array<Principal>,
  'image' : [] | [Array<Video>],
  'comments_count' : bigint,
  'price' : [] | [bigint],
  'post_status' : PostStatus,
}
export interface PostCanisterInitArgs {
  'controllers' : Array<Principal>,
  'canister_ids' : Array<[string, Principal]>,
  'accounts' : Array<UserProfile>,
}
export interface PostPagination {
  'end' : bigint,
  'post_id' : bigint,
  'start' : bigint,
}
export interface PostPurchaseArgs {
  'post_id' : bigint,
  'created_by' : Principal,
}
export type PostStatus = { 'Draft' : null } |
  { 'Archived' : null } |
  { 'Published' : null };
export type PostVisibility = { 'DiamondUser' : null } |
  { 'Everyone' : null };
export interface PurchaseUserMedia { 'amt' : bigint, 'owner' : Principal }
export type Result = { 'Ok' : null } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : string } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : bigint } |
  { 'Err' : string };
export type Result_3 = { 'Ok' : Post } |
  { 'Err' : string };
export type Result_4 = { 'Ok' : UserProfileIC } |
  { 'Err' : string };
export type Result_5 = { 'Ok' : CanisterMetaData } |
  { 'Err' : string };
export type Result_6 = { 'Ok' : PurchaseUserMedia } |
  { 'Err' : string };
export interface SinglePurchaseArgs {
  'post_id' : bigint,
  'created_by' : Principal,
  'media_id' : string,
}
export interface UpdateMembershipIC {
  'user' : Principal,
  'membership' : Membership,
}
export interface UpdatePostArgs {
  'id' : bigint,
  'content' : string,
  'video' : [] | [Video],
  'post_visibility' : PostVisibility,
  'image' : [] | [Array<Video>],
  'price' : [] | [bigint],
  'post_status' : PostStatus,
}
export interface UpdateUserProfileArgsIC {
  'username' : string,
  'user_id' : Principal,
}
export interface UserProfile {
  'username' : string,
  'user_id' : Principal,
  'membership' : Membership,
}
export interface UserProfileIC {
  'username' : string,
  'user_id' : Principal,
  'likes' : Array<bigint>,
  'membership' : Membership,
  'posts' : Array<bigint>,
  'collects' : Array<bigint>,
}
export interface Video {
  'need_pay' : boolean,
  'source' : string,
  'price' : [] | [bigint],
}
export interface _SERVICE {
  'admin_add_user_profile' : ActorMethod<[UserProfileIC], Result>,
  'admin_update_membership' : ActorMethod<[UpdateMembershipIC], Result>,
  'admin_update_user_profile' : ActorMethod<[UpdateUserProfileArgsIC], Result>,
  'api_archive_post' : ActorMethod<[UpdatePostArgs], Result_1>,
  'api_comment_on_post' : ActorMethod<[bigint, string], Result_1>,
  'api_create_new_post' : ActorMethod<[CreatePostArgs], Result_2>,
  'api_delete_post' : ActorMethod<[bigint], Result_1>,
  'api_get_latest_posts' : ActorMethod<[Pagination], Array<Post>>,
  'api_get_my_posts' : ActorMethod<[Pagination], Array<Post>>,
  'api_get_post_by_id' : ActorMethod<[bigint], Result_3>,
  'api_get_post_by_status' : ActorMethod<[GetByPostStatusArgs], Array<Post>>,
  'api_get_post_comments' : ActorMethod<[PostPagination], Array<CommentBody>>,
  'api_get_subscribed_posts' : ActorMethod<[Pagination], Array<Post>>,
  'api_like_unlike_post' : ActorMethod<[bigint], Result_1>,
  'api_post_by_user_id' : ActorMethod<[Principal, Pagination], Array<Post>>,
  'api_save_post' : ActorMethod<[UpdatePostArgs], Result_1>,
  'api_search_post' : ActorMethod<[string], Array<Post>>,
  'api_update_post' : ActorMethod<[UpdatePostArgs], Result_1>,
  'debug_get_all_profile' : ActorMethod<[], Array<UserProfileIC>>,
  'debug_get_user_profile' : ActorMethod<[], Result_4>,
  'debug_total_posts' : ActorMethod<[], bigint>,
  'get_canister_meta_data' : ActorMethod<[], Result_5>,
  'greet' : ActorMethod<[string], string>,
  'ic_get_media_price' : ActorMethod<[SinglePurchaseArgs], Result_6>,
  'ic_get_price' : ActorMethod<[PostPurchaseArgs], Result_6>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
