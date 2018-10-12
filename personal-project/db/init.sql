drop table if exists users cascade;
drop table if exists photos cascade;


create table users(
id serial primary key NOT NULL unique,
name text,
password text unique
);

create table photos(
users_id integer references users(id),
photos_id serial primary key NOT NULL unique,
photos_url text
);


select * from users;

select * from photos;
