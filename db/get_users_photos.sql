select users.name, photos.photos_url from users 
join photos on (users.id = photos.users_id)
WHERE users.id = $1;