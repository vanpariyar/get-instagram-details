$('.instagram-get').on( 'click', function(event) {
    // alert('ads');
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