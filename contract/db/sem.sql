//词条
create table if not exists sem.entry
(
    entry_id     int auto_increment
        primary key,
    entry_name   longtext not null,
    entry_detail longtext not null,
    image_url    longtext null
);

//用户信息
create table if not exists sem.user
(
    user_id  int auto_increment
        primary key,
    username longtext                                            not null,
    phone    longtext                                            null,
    password longtext                                            not null,
    category enum ('common', 'expert', 'admin') default 'common' not null
);


//浏览历史
create table if not exists sem.browsing_history
(
    id       int auto_increment
        primary key,
    user_id  int                                 not null,
    entry_id int                                 not null,
    time     timestamp default CURRENT_TIMESTAMP null,
    constraint browsing_history_entry_entry_id_fk
        foreign key (entry_id) references sem.entry (entry_id),
    constraint browsing_history_user_user_id_fk
        foreign key (user_id) references sem.user (user_id)
);

//评论
create table if not exists sem.comment
(
    comment_id     int auto_increment
        primary key,
    user_id        int            not null,
    entry_id       int            not null,
    pre_comment_id int default -1 null,
    comment_detail int            not null,
    constraint comment_entry_entry_id_fk
        foreign key (entry_id) references sem.entry (entry_id),
    constraint comment_user_id_fk
        foreign key (user_id) references sem.user (user_id)
);

//词条修改申请
create table if not exists sem.entry_edit_application
(
    application_id int auto_increment
        primary key,
    user_id        int      not null,
    entry_id       int      not null,
    edit_reason    longtext null,
    edit_detail    longtext not null,
    states enum ('accepted','pending','rejected') default 'pending' not null,
    constraint entry_edit_application_entry_entry_id_fk
        foreign key (entry_id) references sem.entry (entry_id),
    constraint entry_edit_application_user_user_id_fk
        foreign key (user_id) references sem.user (user_id)
);

//我的收藏
create table if not exists sem.user_favorites
(
    user_id  int not null,
    entry_id int not null,
    primary key (user_id, entry_id),
    constraint user_favorites_entry_entry_id_fk
        foreign key (entry_id) references sem.entry (entry_id),
    constraint user_favorites_user_user_id_fk
        foreign key (user_id) references sem.user (user_id)
);

//我的喜欢
create table if not exists sem.user_like
(
    user_id  int not null,
    entry_id int not null,
    primary key (user_id, entry_id),
    constraint user_like_entry_entry_id_fk
        foreign key (entry_id) references sem.entry (entry_id),
    constraint user_like_user_user_id_fk
        foreign key (user_id) references sem.user (user_id)
);

//用户升级申请
create table if not exists sem.user_upgade_application
(
    application_id   int auto_increment
        primary key,
    user_id          int                                 not null,
    application_msg  longtext                            not null,
    application_time timestamp default CURRENT_TIMESTAMP null,
    states enum ('accepted','pending','rejected') default 'pending' not null,
    constraint user_upgade_application_user_user_id_fk
        foreign key (user_id) references sem.user (user_id)
);


