-- for now, might change on monday

drop table if exists users cascade;
drop table if exists photos cascade;
drop table if exists admin cascade;


create table admin(
id serial primary key NOT NULL unique,
name text NOT NULL,
password text unique,
email text unique NOT NULL
);

create table users(
id serial primary key NOT NULL unique,
name text,
password text unique,
email text unique NOT NULL
);


create table photos(
users_id integer references users(id),
photos_id serial primary key NOT NULL unique,
photos_url text
);



insert into admin(name, password, email)
values('alexis', 'jack.d', 'alexis.m.hand@gmail.com');

insert into users(name, password, email)
values('austin', 'honey', 'austin.grubb.1995@gmail.com');

insert into users(name, password, email)
values('jacob', 'testpass', 'jacob5@gmail.com');

insert into users(name, password, email)
values('dan', 'test3', 'dan@gmail.com');

insert into photos(users_id, photos_id, photos_url)
values(1, 1, 'testurl');

insert into photos(users_id, photos_id, photos_url)
values(2, 2, 'testurl2');

insert into photos(users_id, photos_id, photos_url)
values(3, 3, 'testurl3');



select * from users 
join photos on (users.id = photos.users_id);



select * from users;

select * from photos;

delete from photos 
where users_id = 2;

delete from users 
where id =2;
