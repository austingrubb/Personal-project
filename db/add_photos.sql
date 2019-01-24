insert into photos
(users_id, photos_url)
values
($1, $2);

select * from photos;
