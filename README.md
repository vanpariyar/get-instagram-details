# get-instagram-details
#### You can find the live demo from this url https://vanpariyar.github.io/get-instagram-details/

- In this demo i have implemented the Instaram Public GraphQL API.
- (Note) :- This api works only For the Public Details.
- I have used simple structure, So anyone can able to make use of their own site.

## This api i have used in this Demo
`https://www.instagram.com/"+instaUsername+"?__a=1`
- we can use simple get request to the above api shown below:-

```javascript
$('.instagram-get').on( 'click', function(event) {
    if(instaUsername = $('#instagram-username').val()){
        $.ajax({
            url:"https://www.instagram.com/"+instaUsername+"?__a=1",
            type:'get',
            success:function(response){
                console.log(response);
                $(".profile-pic").attr('src',response.graphql.user.profile_pic_url_hd);
                $(".name").html(response.graphql.user.full_name);
                $(".biography").html(response.graphql.user.biography);
                $(".username").html(response.graphql.user.username);
                $(".number-of-posts").html(response.graphql.user.edge_owner_to_timeline_media.count);
                $(".followers").html((response.graphql.user.edge_followed_by.count));
                $(".following").html((response.graphql.user.edge_follow.count));
                $('.insta-details').show('slow');
            }

        });	
        
    }
});	
```
-You can see the response from the Ajax.
- I have used the Jquery Ajax request To get The data and For the view part i have used Bootstrap.
- You can use anythig to get data like if you are using the `fetch` method then you can use below code

```javascript
$('.instagram-get').on( 'click', function(event) {
    if(instaUsername = $('#instagram-username').val()){
        fetch('users.json').then(function(response) {
                console.log(response);
                $(".profile-pic").attr('src',response.graphql.user.profile_pic_url_hd);
                $(".name").html(response.graphql.user.full_name);
                $(".biography").html(response.graphql.user.biography);
                $(".username").html(response.graphql.user.username);
                $(".number-of-posts").html(response.graphql.user.edge_owner_to_timeline_media.count);
                $(".followers").html((response.graphql.user.edge_followed_by.count));
                $(".following").html((response.graphql.user.edge_follow.count));
                $('.insta-details').show('slow');
        });
    }
});	
```
