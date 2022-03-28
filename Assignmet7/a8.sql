/*Display drama (genre) DVDs that won awards. Sort results by year of when the DVD won an 
award. Show dvd title, award, genre, label, and rating.
 */
SELECT dvd_titles.title, dvd_titles.award, genres.genre, labels.label, ratings.rating
FROM (dvd_titles
inner join genres ON dvd_titles.genre_id = genres.genre_id
inner join labels ON dvd_titles.label_id = labels.label_id
inner join ratings ON dvd_titles.rating_id = ratings.rating_id)
where 
genres.genre = 'Drama' and 
dvd_titles.award != "" order by dvd_titles.award asc;

/* Display DVDs made by Universal (a label) and have DTS sound. Show dvd title, sound, label, 
genre, and rating.*/
SELECT dvd_titles.title, sounds.sound, labels.label, genres.genre, ratings.rating
FROM (dvd_titles
inner join sounds ON dvd_titles.sound_id = sounds.sound_id
inner join genres ON dvd_titles.genre_id = genres.genre_id
inner join labels ON dvd_titles.label_id = labels.label_id
inner join ratings ON dvd_titles.rating_id = ratings.rating_id)
where 
sounds.sound = "DTS" and 
labels.label = "Universal";

/* Display R-rated Sci-Fi DVDs that have a release date (not NULL). Order results from newest to 
oldest released DVD. Show dvd title, release date, rating, genre, sound, and label.*/
SELECT dvd_titles.title, release_date, ratings.rating, genres.genre, sounds.sound, labels.label
FROM (dvd_titles
inner join sounds ON dvd_titles.sound_id = sounds.sound_id
inner join labels ON dvd_titles.label_id = labels.label_id
inner join genres ON dvd_titles.genre_id = genres.genre_id
inner join ratings ON dvd_titles.rating_id = ratings.rating_id)
where 
genres.genre = "Sci-Fi" and 
rating = "R" and 
release_date != "" order by release_date desc;

