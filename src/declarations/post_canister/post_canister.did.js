export const idlFactory = ({ IDL }) => {
  const Membership = IDL.Variant({ 'Diamond' : IDL.Null, 'Guest' : IDL.Null });
  const UserProfile = IDL.Record({
    'username' : IDL.Text,
    'user_id' : IDL.Principal,
    'membership' : Membership,
  });
  const PostCanisterInitArgs = IDL.Record({
    'controllers' : IDL.Vec(IDL.Principal),
    'canister_ids' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Principal)),
    'accounts' : IDL.Vec(UserProfile),
  });
  const UserProfileIC = IDL.Record({
    'username' : IDL.Text,
    'user_id' : IDL.Principal,
    'likes' : IDL.Vec(IDL.Nat),
    'membership' : Membership,
    'posts' : IDL.Vec(IDL.Nat),
    'collects' : IDL.Vec(IDL.Nat),
  });
  const Result = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text });
  const UpdateMembershipIC = IDL.Record({
    'user' : IDL.Principal,
    'membership' : Membership,
  });
  const UpdateUserProfileArgsIC = IDL.Record({
    'username' : IDL.Text,
    'user_id' : IDL.Principal,
  });
  const Video = IDL.Record({
    'need_pay' : IDL.Bool,
    'source' : IDL.Text,
    'price' : IDL.Opt(IDL.Nat),
  });
  const PostVisibility = IDL.Variant({
    'DiamondUser' : IDL.Null,
    'Everyone' : IDL.Null,
  });
  const PostStatus = IDL.Variant({
    'Draft' : IDL.Null,
    'Archived' : IDL.Null,
    'Published' : IDL.Null,
  });
  const UpdatePostArgs = IDL.Record({
    'id' : IDL.Nat,
    'content' : IDL.Text,
    'video' : IDL.Opt(Video),
    'post_visibility' : PostVisibility,
    'image' : IDL.Opt(IDL.Vec(Video)),
    'price' : IDL.Opt(IDL.Nat),
    'post_status' : PostStatus,
  });
  const Result_1 = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  const CreatePostArgs = IDL.Record({
    'content' : IDL.Text,
    'video' : IDL.Opt(Video),
    'post_visibility' : PostVisibility,
    'image' : IDL.Opt(IDL.Vec(Video)),
    'price' : IDL.Opt(IDL.Nat),
    'post_status' : PostStatus,
  });
  const Result_2 = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : IDL.Text });
  const Pagination = IDL.Record({ 'end' : IDL.Nat64, 'start' : IDL.Nat64 });
  const Post = IDL.Record({
    'views_count' : IDL.Nat64,
    'post_id' : IDL.Nat,
    'content' : IDL.Text,
    'creator_id' : IDL.Principal,
    'video' : IDL.Opt(Video),
    'views' : IDL.Vec(IDL.Principal),
    'like_count' : IDL.Nat64,
    'post_visibility' : PostVisibility,
    'created_at' : IDL.Nat64,
    'likes' : IDL.Vec(IDL.Principal),
    'image' : IDL.Opt(IDL.Vec(Video)),
    'comments_count' : IDL.Nat64,
    'price' : IDL.Opt(IDL.Nat),
    'post_status' : PostStatus,
  });
  const Result_3 = IDL.Variant({ 'Ok' : Post, 'Err' : IDL.Text });
  const GetByPostStatusArgs = IDL.Record({
    'status' : PostStatus,
    'pagination' : Pagination,
  });
  const PostPagination = IDL.Record({
    'end' : IDL.Nat64,
    'post_id' : IDL.Nat,
    'start' : IDL.Nat64,
  });
  const CommentBody = IDL.Record({
    'creator' : IDL.Principal,
    'content' : IDL.Text,
    'created_at' : IDL.Nat64,
    'comment_id' : IDL.Nat,
  });
  const Result_4 = IDL.Variant({ 'Ok' : UserProfileIC, 'Err' : IDL.Text });
  const CanisterMetaData = IDL.Record({
    'controllers' : IDL.Vec(IDL.Principal),
    'canister_ids' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Principal)),
  });
  const Result_5 = IDL.Variant({ 'Ok' : CanisterMetaData, 'Err' : IDL.Text });
  const SinglePurchaseArgs = IDL.Record({
    'post_id' : IDL.Nat,
    'created_by' : IDL.Principal,
    'media_id' : IDL.Text,
  });
  const PurchaseUserMedia = IDL.Record({
    'amt' : IDL.Nat,
    'owner' : IDL.Principal,
  });
  const Result_6 = IDL.Variant({ 'Ok' : PurchaseUserMedia, 'Err' : IDL.Text });
  const PostPurchaseArgs = IDL.Record({
    'post_id' : IDL.Nat,
    'created_by' : IDL.Principal,
  });
  return IDL.Service({
    'admin_add_user_profile' : IDL.Func([UserProfileIC], [Result], []),
    'admin_update_membership' : IDL.Func([UpdateMembershipIC], [Result], []),
    'admin_update_user_profile' : IDL.Func(
        [UpdateUserProfileArgsIC],
        [Result],
        [],
      ),
    'api_archive_post' : IDL.Func([UpdatePostArgs], [Result_1], []),
    'api_comment_on_post' : IDL.Func([IDL.Nat, IDL.Text], [Result_1], []),
    'api_create_new_post' : IDL.Func([CreatePostArgs], [Result_2], []),
    'api_delete_post' : IDL.Func([IDL.Nat], [Result_1], []),
    'api_get_latest_posts' : IDL.Func([Pagination], [IDL.Vec(Post)], ['query']),
    'api_get_my_posts' : IDL.Func([Pagination], [IDL.Vec(Post)], ['query']),
    'api_get_post_by_id' : IDL.Func([IDL.Nat], [Result_3], []),
    'api_get_post_by_status' : IDL.Func(
        [GetByPostStatusArgs],
        [IDL.Vec(Post)],
        ['query'],
      ),
    'api_get_post_comments' : IDL.Func(
        [PostPagination],
        [IDL.Vec(CommentBody)],
        ['query'],
      ),
    'api_get_subscribed_posts' : IDL.Func([Pagination], [IDL.Vec(Post)], []),
    'api_like_unlike_post' : IDL.Func([IDL.Nat], [Result_1], []),
    'api_post_by_user_id' : IDL.Func(
        [IDL.Principal, Pagination],
        [IDL.Vec(Post)],
        ['query'],
      ),
    'api_save_post' : IDL.Func([UpdatePostArgs], [Result_1], []),
    'api_search_post' : IDL.Func([IDL.Text], [IDL.Vec(Post)], ['query']),
    'api_update_post' : IDL.Func([UpdatePostArgs], [Result_1], []),
    'debug_get_all_profile' : IDL.Func([], [IDL.Vec(UserProfileIC)], ['query']),
    'debug_get_user_profile' : IDL.Func([], [Result_4], ['query']),
    'debug_total_posts' : IDL.Func([], [IDL.Nat], ['query']),
    'get_canister_meta_data' : IDL.Func([], [Result_5], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'ic_get_media_price' : IDL.Func(
        [SinglePurchaseArgs],
        [Result_6],
        ['query'],
      ),
    'ic_get_price' : IDL.Func([PostPurchaseArgs], [Result_6], ['query']),
  });
};
export const init = ({ IDL }) => {
  const Membership = IDL.Variant({ 'Diamond' : IDL.Null, 'Guest' : IDL.Null });
  const UserProfile = IDL.Record({
    'username' : IDL.Text,
    'user_id' : IDL.Principal,
    'membership' : Membership,
  });
  const PostCanisterInitArgs = IDL.Record({
    'controllers' : IDL.Vec(IDL.Principal),
    'canister_ids' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Principal)),
    'accounts' : IDL.Vec(UserProfile),
  });
  return [PostCanisterInitArgs];
};
