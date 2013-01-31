

(function () {
    
    tt.singleItemTemplate = "\
<h2 class='title'><%=title%></h2>\
<p class='content'>by <span><%=user.login%></span></p>\
<p class='content'><%=body%><br><a href='#'>&times; Close</a></p>\
";

    tt.listItemTemplate = "\
<h2 class='title'><a href='#issue/<%=number%>'><%=title%></a></h2>\
<ul class='content'>\
    <li class='created-at'>Created at: <%=created_at%></li>\
    <li class='user'>created by: <%=user.login%></li>\
    <li class='comment-count'>Comments: <%=comments%></li>\
</ul>\
";
})();