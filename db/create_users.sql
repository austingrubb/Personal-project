insert into users
(name, email, password, admin)
values
($1, $2, $3, false);

select * from users 
where email = $2; 
