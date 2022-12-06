-- 词条 
create table if not exists sem.entry (
    -- 主键
    entry_id int auto_increment primary key,
    -- 中药名
    entry_name longtext not null,
    -- 图像链接
    image_url longtext,
    -- 别名
    aliass longtext,
    -- 英文名
    english_name longtext,
    -- 药用部位
    medicinal_part longtext,
    -- 植物形态
    morphology longtext,
    -- 产地分布
    distributions longtext,
    -- 采收加工
    harvests longtext,
    -- 药材性状
    medicinal_properties longtext,
    -- 性味归经
    nature_taste longtext,
    -- 功效和作用
    efficacy longtext,
    -- 临床应用
    clinical_usage longtext,
    -- 药理研究
    pharmacology longtext,
    -- 化学成分
    chemical_components longtext,
    -- 使用禁忌
    contraindications longtext,
    -- 扩展部分，供其他数据源使用
    extension longtext
);
--  用户信息
create table if not exists sem.user (
    user_id int auto_increment primary key,
    username longtext not null,
    phone longtext null,
    password longtext not null,
    category enum ('common', 'expert', 'admin') default 'common' not null
);
-- 浏览历史
create table if not exists sem.browsing_history (
    id int auto_increment primary key,
    user_id int not null,
    entry_id int not null,
    time timestamp default CURRENT_TIMESTAMP null,
    constraint browsing_history_entry_entry_id_fk foreign key (entry_id) references sem.entry (entry_id),
    constraint browsing_history_user_user_id_fk foreign key (user_id) references sem.user (user_id)
);
-- 评论 
create table if not exists sem.comment (
    comment_id int auto_increment primary key,
    user_id int not null,
    entry_id int not null,
    pre_comment_id int default -1 null,
    comment_detail int not null,
    constraint comment_entry_entry_id_fk foreign key (entry_id) references sem.entry (entry_id),
    constraint comment_user_id_fk foreign key (user_id) references sem.user (user_id)
);
-- 词条修改申请 
create table if not exists sem.entry_edit_application (
    application_id int auto_increment primary key,
    user_id int not null,
    entry_id int not null,
    edit_reason longtext null,
    -- 以下是要编辑的字段列表
    -- 中药名
    entry_name longtext not null,
    -- 图像链接
    image_url longtext,
    -- 别名
    aliass longtext,
    -- 英文名
    english_name longtext,
    -- 药用部位
    medicinal_part longtext,
    -- 植物形态
    morphology longtext,
    -- 产地分布
    distributions longtext,
    -- 采收加工
    harvests longtext,
    -- 药材性状
    medicinal_properties longtext,
    -- 性味归经
    nature_taste longtext,
    -- 功效和作用
    efficacy longtext,
    -- 临床应用
    clinical_usage longtext,
    -- 药理研究
    pharmacology longtext,
    -- 化学成分
    chemical_components longtext,
    -- 使用禁忌
    contraindications longtext,
    states enum ('accepted', 'pending', 'rejected') default 'pending' not null,
    constraint entry_edit_application_entry_entry_id_fk foreign key (entry_id) references sem.entry (entry_id),
    constraint entry_edit_application_user_user_id_fk foreign key (user_id) references sem.user (user_id)
);
-- 我的收藏 
create table if not exists sem.user_favorites (
    user_id int not null,
    entry_id int not null,
    primary key (user_id, entry_id),
    constraint user_favorites_entry_entry_id_fk foreign key (entry_id) references sem.entry (entry_id),
    constraint user_favorites_user_user_id_fk foreign key (user_id) references sem.user (user_id)
);
-- 我的喜欢 
create table if not exists sem.user_like (
    user_id int not null,
    entry_id int not null,
    primary key (user_id, entry_id),
    constraint user_like_entry_entry_id_fk foreign key (entry_id) references sem.entry (entry_id),
    constraint user_like_user_user_id_fk foreign key (user_id) references sem.user (user_id)
);
-- 用户升级申请 
create table if not exists sem.user_upgade_application (
    application_id int auto_increment primary key,
    user_id int not null,
    application_msg longtext not null,
    application_time timestamp default CURRENT_TIMESTAMP null,
    states enum ('accepted', 'pending', 'rejected') default 'pending' not null,
    constraint user_upgade_application_user_user_id_fk foreign key (user_id) references sem.user (user_id)
);