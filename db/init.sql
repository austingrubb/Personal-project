-- for now, might change on monday

drop table if exists users cascade;
drop table if exists photos cascade;



create table users(
id serial primary key NOT NULL unique,
name text,
password text unique,
email text unique NOT NULL,
admin boolean
);


create table photos(
id serial primary key NOT NULL unique,
users_id integer references users(id),
photos_url text
);




insert into users(name, password, email, admin)
values('alexis', 'jack.d', 'alexis.m.hand@gmail.com', true);

insert into users(name, password, email, admin)
values('austin', 'honey', 'austin.grubb.1995@gmail.com', false);

insert into users(name, password, email, admin)
values('jacob', 'testpass', 'jacob5@gmail.com', false);

insert into users(name, password, email, admin)
values('dan', 'test3', 'dan@gmail.com', false);

insert into photos(users_id, photos_id, photos_url)
values(2, 2, 'testurl');

insert into photos(users_id, photos_id, photos_url)
values(3, 3, 'testurl2');

insert into photos(users_id, photos_id, photos_url)
values(4, 4, 'testurl3');



select (users.name, photos.photos_url) from users 
join photos on (users.id = photos.users_id);


select * from users;

select * from users
where admin = true;

select * from users
where admin = false;

select * from photos;

delete from photos 
where users_id = 2;

delete from users 
where id =2;

