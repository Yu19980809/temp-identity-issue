export const idlFactory = ({ IDL }) => {
  const Membership = IDL.Variant({ 'Diamond' : IDL.Null, 'Guest' : IDL.Null });
  const DexFansCanisterInitArgs = IDL.Record({
    'controllers' : IDL.Vec(IDL.Principal),
    'canister_ids' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Principal)),
    'active_post_canister' : IDL.Principal,
    'payment_recipient' : IDL.Principal,
    'membership_plans' : IDL.Vec(IDL.Tuple(Membership, IDL.Nat)),
  });
  const Result = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text });
  const ICAddPostCanisterProfile = IDL.Record({
    'caller' : IDL.Principal,
    'post_canister' : IDL.Principal,
  });
  const Result_1 = IDL.Variant({ 'Ok' : IDL.Principal, 'Err' : IDL.Text });
  const Collection = IDL.Record({
    'post_id' : IDL.Nat,
    'asset_canister' : IDL.Principal,
  });
  const UserInputArgs = IDL.Record({
    'bio' : IDL.Opt(IDL.Text),
    'username' : IDL.Text,
    'cover_image' : IDL.Opt(IDL.Text),
    'captcha_solution' : IDL.Text,
    'avatar' : IDL.Opt(IDL.Text),
  });
  const Result_2 = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  const Challange = IDL.Record({ 'base64_img' : IDL.Text });
  const Result_3 = IDL.Variant({ 'Ok' : Challange, 'Err' : IDL.Text });
  const Result_4 = IDL.Variant({
    'Ok' : IDL.Vec(Collection),
    'Err' : IDL.Text,
  });
  const UserProfile = IDL.Record({
    'bio' : IDL.Opt(IDL.Text),
    'token_amount' : IDL.Nat,
    'username' : IDL.Text,
    'asset_canister_id' : IDL.Principal,
    'cover_image' : IDL.Opt(IDL.Text),
    'membership_ledger_block' : IDL.Vec(IDL.Nat),
    'membership_till' : IDL.Nat64,
    'created_at' : IDL.Nat64,
    'user_id' : IDL.Principal,
    'is_bot' : IDL.Bool,
    'likes' : IDL.Vec(IDL.Nat),
    'active_post_canister' : IDL.Principal,
    'subscribers' : IDL.Vec(IDL.Principal),
    'subscribing' : IDL.Vec(IDL.Principal),
    'membership' : Membership,
    'collects' : IDL.Vec(Collection),
    'all_post_canisters' : IDL.Vec(IDL.Principal),
    'avatar' : IDL.Opt(IDL.Text),
  });
  const Result_5 = IDL.Variant({ 'Ok' : UserProfile, 'Err' : IDL.Text });
  const UserDetailsMinified = IDL.Record({
    'username' : IDL.Text,
    'cover' : IDL.Opt(IDL.Text),
    'user_id' : IDL.Principal,
    'avatar' : IDL.Opt(IDL.Text),
  });
  const NotificationType = IDL.Variant({
    'NewComment' : IDL.Null,
    'NewLike' : IDL.Null,
    'NewPost' : IDL.Null,
    'NewSubscribingPost' : IDL.Null,
    'NewSubscriber' : IDL.Null,
  });
  const NotificationBody = IDL.Record({
    'by' : IDL.Opt(UserDetailsMinified),
    'post_id' : IDL.Opt(IDL.Nat),
    'comment_content' : IDL.Opt(IDL.Text),
    'created_on' : IDL.Nat64,
    'category' : NotificationType,
    'expiring_on' : IDL.Nat64,
    'post_brief' : IDL.Opt(IDL.Text),
  });
  const PurchaseMediaBody = IDL.Record({
    'post_id' : IDL.Text,
    'ledger_block' : IDL.Nat,
  });
  const PurchasePostBody = IDL.Record({
    'post_id' : IDL.Nat,
    'ledger_block' : IDL.Nat,
  });
  const UserProfileLittleMinified = IDL.Record({
    'bio' : IDL.Opt(IDL.Text),
    'token_amount' : IDL.Nat,
    'username' : IDL.Text,
    'asset_canister_id' : IDL.Principal,
    'cover_image' : IDL.Opt(IDL.Text),
    'created_at' : IDL.Nat64,
    'user_id' : IDL.Principal,
    'active_post_canister' : IDL.Principal,
    'subscribers' : IDL.Vec(IDL.Principal),
    'subscribing' : IDL.Vec(IDL.Principal),
    'membership' : Membership,
    'all_post_canisters' : IDL.Vec(IDL.Principal),
    'avatar' : IDL.Opt(IDL.Text),
  });
  const Result_6 = IDL.Variant({
    'Ok' : UserProfileLittleMinified,
    'Err' : IDL.Text,
  });
  const Result_7 = IDL.Variant({
    'Ok' : UserDetailsMinified,
    'Err' : IDL.Text,
  });
  const CaptchaSolution = IDL.Record({
    'data' : IDL.Text,
    'created_at' : IDL.Nat64,
    'created_by' : IDL.Principal,
  });
  const CanisterMetaData = IDL.Record({
    'controllers' : IDL.Vec(IDL.Principal),
    'canister_ids' : IDL.Vec(IDL.Tuple(IDL.Nat8, IDL.Principal)),
    'active_post_canister' : IDL.Principal,
    'all_post_canisters' : IDL.Vec(IDL.Principal),
    'payment_recipient' : IDL.Principal,
    'membership_plans' : IDL.Vec(IDL.Tuple(Membership, IDL.Nat)),
  });
  const Result_8 = IDL.Variant({ 'Ok' : CanisterMetaData, 'Err' : IDL.Text });
  const Result_9 = IDL.Variant({
    'Ok' : IDL.Vec(IDL.Principal),
    'Err' : IDL.Text,
  });
  const CommentNotificationArgs = IDL.Record({
    'post_id' : IDL.Nat,
    'comment_content' : IDL.Text,
    'post_owner' : IDL.Principal,
    'post_brief' : IDL.Opt(IDL.Text),
  });
  const LikeNotificationArgs = IDL.Record({
    'post_id' : IDL.Nat,
    'post_owner' : IDL.Principal,
    'post_brief' : IDL.Text,
  });
  return IDL.Service({
    'admin_add_controller' : IDL.Func([IDL.Principal], [Result], []),
    'admin_profile_post_canister' : IDL.Func(
        [ICAddPostCanisterProfile],
        [Result],
        [],
      ),
    'admin_remove_controller' : IDL.Func([IDL.Principal], [Result], []),
    'admin_set_post_canister' : IDL.Func([IDL.Principal], [Result_1], []),
    'api_add_to_collection' : IDL.Func([Collection], [Result], []),
    'api_create_account' : IDL.Func([UserInputArgs], [Result_2], []),
    'api_create_captcha' : IDL.Func([], [Result_3], []),
    'api_get_my_collection' : IDL.Func([], [Result_4], ['query']),
    'api_get_my_profile' : IDL.Func([], [Result_5], ['query']),
    'api_get_notifications' : IDL.Func(
        [],
        [IDL.Vec(NotificationBody)],
        ['query'],
      ),
    'api_get_purchased_media_ids' : IDL.Func(
        [],
        [IDL.Vec(PurchaseMediaBody)],
        ['query'],
      ),
    'api_get_purchased_posts_ids' : IDL.Func(
        [],
        [IDL.Vec(PurchasePostBody)],
        ['query'],
      ),
    'api_get_subscribed' : IDL.Func(
        [],
        [IDL.Vec(UserDetailsMinified)],
        ['query'],
      ),
    'api_get_subscribers' : IDL.Func(
        [],
        [IDL.Vec(UserDetailsMinified)],
        ['query'],
      ),
    'api_get_suggested_user' : IDL.Func(
        [],
        [IDL.Vec(UserDetailsMinified)],
        ['query'],
      ),
    'api_get_user_details' : IDL.Func([IDL.Principal], [Result_6], ['query']),
    'api_get_user_minified' : IDL.Func([IDL.Principal], [Result_7], ['query']),
    'api_purchase_media' : IDL.Func(
        [IDL.Nat, IDL.Text, IDL.Principal],
        [Result],
        [],
      ),
    'api_purchase_membership' : IDL.Func([Membership], [Result], []),
    'api_purchase_post' : IDL.Func([IDL.Nat, IDL.Principal], [Result], []),
    'api_search_user' : IDL.Func(
        [IDL.Text],
        [IDL.Vec(UserDetailsMinified)],
        ['query'],
      ),
    'api_subscribe_account' : IDL.Func([IDL.Principal], [Result], []),
    'api_unsubscribe_account' : IDL.Func([IDL.Principal], [Result], []),
    'api_update_profile' : IDL.Func([UserInputArgs], [Result], []),
    'api_update_user_likes' : IDL.Func(
        [IDL.Principal, IDL.Nat, IDL.Bool],
        [Result],
        [],
      ),
    'create_post_canister' : IDL.Func([], [Result_1], []),
    'debug_get_all_captchas' : IDL.Func(
        [],
        [IDL.Vec(CaptchaSolution)],
        ['query'],
      ),
    'get_asset_canister' : IDL.Func([], [Result_1], ['query']),
    'get_canister_meta_data' : IDL.Func([], [Result_8], ['query']),
    'get_ledger_canister' : IDL.Func([], [Result_1], ['query']),
    'get_post_canister' : IDL.Func([], [Result_1], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'ic_get_subscribed_list' : IDL.Func([IDL.Principal], [Result_9], ['query']),
    'notify_comments' : IDL.Func([CommentNotificationArgs], [Result], []),
    'notify_likes' : IDL.Func([LikeNotificationArgs], [Result], []),
    'notify_new_subscriber' : IDL.Func([IDL.Principal], [Result], []),
    'notify_subscribers_newpost' : IDL.Func(
        [IDL.Opt(IDL.Text), IDL.Nat],
        [Result],
        [],
      ),
  });
};
export const init = ({ IDL }) => {
  const Membership = IDL.Variant({ 'Diamond' : IDL.Null, 'Guest' : IDL.Null });
  const DexFansCanisterInitArgs = IDL.Record({
    'controllers' : IDL.Vec(IDL.Principal),
    'canister_ids' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Principal)),
    'active_post_canister' : IDL.Principal,
    'payment_recipient' : IDL.Principal,
    'membership_plans' : IDL.Vec(IDL.Tuple(Membership, IDL.Nat)),
  });
  return [DexFansCanisterInitArgs];
};
