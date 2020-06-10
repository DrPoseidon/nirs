/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     08.06.2020 14:10:57                          */
/*==============================================================*/


alter table Comments 
   drop foreign key FK_COMMENTS_PHOTOS_TO_PHOTOS;

alter table Comments 
   drop foreign key FK_COMMENTS_USERS_TO__USERS;

alter table Messages 
   drop foreign key FK_MESSAGES_USERS_TO__USERS;

alter table Photos 
   drop foreign key FK_PHOTOS_USERS_TO__USERS;


alter table Comments 
   drop foreign key FK_COMMENTS_USERS_TO__USERS;

alter table Comments 
   drop foreign key FK_COMMENTS_PHOTOS_TO_PHOTOS;

drop table if exists Comments;


alter table Messages 
   drop foreign key FK_MESSAGES_USERS_TO__USERS;

drop table if exists Messages;


alter table Photos 
   drop foreign key FK_PHOTOS_USERS_TO__USERS;

drop table if exists Photos;

drop table if exists Users;

/*==============================================================*/
/* Table: Comments                                              */
/*==============================================================*/
create table Comments
(
   Comment_ID           bigint not null  comment '',
   User_ID              bigint not null  comment '',
   Photo_ID             bigint not null  comment '',
   Comment_text         text not null  comment '',
   Comment_added_date   datetime not null  comment '',
   primary key (Comment_ID)
);

/*==============================================================*/
/* Table: Messages                                              */
/*==============================================================*/
create table Messages
(
   User_ID              bigint not null  comment '',
   Message_ID           bigint not null  comment '',
   Post_date            datetime not null  comment '',
   Sent_to              varchar(200) not null  comment '',
   Messag_text          text not null  comment ''
);

/*==============================================================*/
/* Table: Photos                                                */
/*==============================================================*/
create table Photos
(
   Photo_ID             bigint not null  comment '',
   User_ID              bigint not null  comment '',
   Path_to_photo        varchar(500) not null  comment '',
   Photo_upload_date    datetime not null  comment '',
   Likes                bigint not null  comment '',
   Number_of_views      bigint not null  comment '',
   primary key (Photo_ID)
);

/*==============================================================*/
/* Table: Users                                                 */
/*==============================================================*/
create table Users
(
   User_ID              bigint not null  comment '',
   Login                varchar(200) not null  comment '',
   Password             varchar(200) not null  comment '',
   Avatar               varchar(500)  comment '',
   Email                varchar(200) not null  comment '',
   Phone_number         varchar(100)  comment '',
   Full_name            varchar(200) not null  comment '',
   primary key (User_ID)
);

alter table Comments add constraint FK_COMMENTS_PHOTOS_TO_PHOTOS foreign key (Photo_ID)
      references Photos (Photo_ID) on delete restrict on update restrict;

alter table Comments add constraint FK_COMMENTS_USERS_TO__USERS foreign key (User_ID)
      references Users (User_ID) on delete restrict on update restrict;

alter table Messages add constraint FK_MESSAGES_USERS_TO__USERS foreign key (User_ID)
      references Users (User_ID) on delete restrict on update restrict;

alter table Photos add constraint FK_PHOTOS_USERS_TO__USERS foreign key (User_ID)
      references Users (User_ID) on delete restrict on update restrict;

