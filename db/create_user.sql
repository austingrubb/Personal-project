insert into users
(name, password, email, admin)
values
($1, $2, $3, $4);

select * from users;