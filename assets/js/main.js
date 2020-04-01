$(document).ready(function () {

    // Full stack proficiency years appear in the footer
     
    $('#fullstack-years').text('2018 - ' + new Date().getFullYear());
    
    // Create a table for GitHub Repo data
    
    $('#gh-repo-data').tablerize();
    
});