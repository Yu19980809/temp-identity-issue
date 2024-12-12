import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface CanisterMetaData {
  'controllers' : Array<Principal>,
  'canister_ids' : Array<[number, Principal]>,
  'active_post_canister' : Principal,
  'all_post_canisters' : Array<Principal>,
  'payment_recipient' : Principal,
  'membership_plans' : Array<[Membership, bigint]>,
}
export interface CaptchaSolution {
  'data' : string,
  'created_at' : bigint,
  'created_by' : Principal,
}
export interface Challange { 'base64_img' : string }
export interface Collection { 'post_id' : bigint, 'asset_canister' : Principal }
export interface CommentNotificationArgs {
  'post_id' : bigint,
  'comment_content' : string,
  'post_owner' : Principal,
  'post_brief' : [] | [string],
}
export interface DexFansCanisterInitArgs {
  'controllers' : Array<Principal>,
  'canister_ids' : Array<[string, Principal]>,
  'active_post_canister' : Principal,
  'payment_recipient' : Principal,
  'membership_plans' : Array<[Membership, bigint]>,
}
export interface ICAddPostCanisterProfile {
  'caller' : Principal,
  'post_canister' : Principal,
}
export interface LikeNotificationArgs {
  'post_id' : bigint,
  'post_owner' : Principal,
  'post_brief' : string,
}
export type Membership = { 'Diamond' : null } |
  { 'Guest' : null };
export interface NotificationBody {
  'by' : [] | [UserDetailsMinified],
  'post_id' : [] | [bigint],
  'comment_content' : [] | [string],
  'created_on' : bigint,
  'category' : NotificationType,
  'expiring_on' : bigint,
  'post_brief' : [] | [string],
}
export type NotificationType = { 'NewComment' : null } |
  { 'NewLike' : null } |
  { 'NewPost' : null } |
  { 'NewSubscribingPost' : null } |
  { 'NewSubscriber' : null };
export interface PurchaseMediaBody {
  'post_id' : string,
  'ledger_block' : bigint,
}
export interface PurchasePostBody {
  'post_id' : bigint,
  'ledger_block' : bigint,
}
export type Result = { 'Ok' : null } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : Principal } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : string } |
  { 'Err' : string };
export type Result_3 = { 'Ok' : Challange } |
  { 'Err' : string };
export type Result_4 = { 'Ok' : Array<Collection> } |
  { 'Err' : string };
export type Result_5 = { 'Ok' : UserProfile } |
  { 'Err' : string };
export type Result_6 = { 'Ok' : UserProfileLittleMinified } |
  { 'Err' : string };
export type Result_7 = { 'Ok' : UserDetailsMinified } |
  { 'Err' : string };
export type Result_8 = { 'Ok' : CanisterMetaData } |
  { 'Err' : string };
export type Result_9 = { 'Ok' : Array<Principal> } |
  { 'Err' : string };
export interface UserDetailsMinified {
  'username' : string,
  'cover' : [] | [string],
  'user_id' : Principal,
  'avatar' : [] | [string],
}
export interface UserInputArgs {
  'bio' : [] | [string],
  'username' : string,
  'cover_image' : [] | [string],
  'captcha_solution' : string,
  'avatar' : [] | [string],
}
export interface UserProfile {
  'bio' : [] | [string],
  'token_amount' : bigint,
  'username' : string,
  'asset_canister_id' : Principal,
  'cover_image' : [] | [string],
  'membership_ledger_block' : Array<bigint>,
  'membership_till' : bigint,
  'created_at' : bigint,
  'user_id' : Principal,
  'is_bot' : boolean,
  'likes' : Array<bigint>,
  'active_post_canister' : Principal,
  'subscribers' : Array<Principal>,
  'subscribing' : Array<Principal>,
  'membership' : Membership,
  'collects' : Array<Collection>,
  'all_post_canisters' : Array<Principal>,
  'avatar' : [] | [string],
}
export interface UserProfileLittleMinified {
  'bio' : [] | [string],
  'token_amount' : bigint,
  'username' : string,
  'asset_canister_id' : Principal,
  'cover_image' : [] | [string],
  'created_at' : bigint,
  'user_id' : Principal,
  'active_post_canister' : Principal,
  'subscribers' : Array<Principal>,
  'subscribing' : Array<Principal>,
  'membership' : Membership,
  'all_post_canisters' : Array<Principal>,
  'avatar' : [] | [string],
}
export interface _SERVICE {
  'admin_add_controller' : ActorMethod<[Principal], Result>,
  'admin_profile_post_canister' : ActorMethod<
    [ICAddPostCanisterProfile],
    Result
  >,
  'admin_remove_controller' : ActorMethod<[Principal], Result>,
  'admin_set_post_canister' : ActorMethod<[Principal], Result_1>,
  'api_add_to_collection' : ActorMethod<[Collection], Result>,
  'api_create_account' : ActorMethod<[UserInputArgs], Result_2>,
  'api_create_captcha' : ActorMethod<[], Result_3>,
  'api_get_my_collection' : ActorMethod<[], Result_4>,
  'api_get_my_profile' : ActorMethod<[], Result_5>,
  'api_get_notifications' : ActorMethod<[], Array<NotificationBody>>,
  'api_get_purchased_media_ids' : ActorMethod<[], Array<PurchaseMediaBody>>,
  'api_get_purchased_posts_ids' : ActorMethod<[], Array<PurchasePostBody>>,
  'api_get_subscribed' : ActorMethod<[], Array<UserDetailsMinified>>,
  'api_get_subscribers' : ActorMethod<[], Array<UserDetailsMinified>>,
  'api_get_suggested_user' : ActorMethod<[], Array<UserDetailsMinified>>,
  'api_get_user_details' : ActorMethod<[Principal], Result_6>,
  'api_get_user_minified' : ActorMethod<[Principal], Result_7>,
  'api_purchase_media' : ActorMethod<[bigint, string, Principal], Result>,
  'api_purchase_membership' : ActorMethod<[Membership], Result>,
  'api_purchase_post' : ActorMethod<[bigint, Principal], Result>,
  'api_search_user' : ActorMethod<[string], Array<UserDetailsMinified>>,
  'api_subscribe_account' : ActorMethod<[Principal], Result>,
  'api_unsubscribe_account' : ActorMethod<[Principal], Result>,
  'api_update_profile' : ActorMethod<[UserInputArgs], Result>,
  'api_update_user_likes' : ActorMethod<[Principal, bigint, boolean], Result>,
  'create_post_canister' : ActorMethod<[], Result_1>,
  'debug_get_all_captchas' : ActorMethod<[], Array<CaptchaSolution>>,
  'get_asset_canister' : ActorMethod<[], Result_1>,
  'get_canister_meta_data' : ActorMethod<[], Result_8>,
  'get_ledger_canister' : ActorMethod<[], Result_1>,
  'get_post_canister' : ActorMethod<[], Result_1>,
  'greet' : ActorMethod<[string], string>,
  'ic_get_subscribed_list' : ActorMethod<[Principal], Result_9>,
  'notify_comments' : ActorMethod<[CommentNotificationArgs], Result>,
  'notify_likes' : ActorMethod<[LikeNotificationArgs], Result>,
  'notify_new_subscriber' : ActorMethod<[Principal], Result>,
  'notify_subscribers_newpost' : ActorMethod<[[] | [string], bigint], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
