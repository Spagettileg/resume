function userInformationHTML(user) {
    return `
        <span class="pt-2 light-user dark-user">
        ${user.name} 
        </span>
            <span class="small-name">
                (@<a href="${user.html_url}" target="_blank">${user.login}</a>) 
            </span>
        
        
        <div class="gh-content"> 
            <div class="pt-2 pb-2 gh-avatar"> 
                <a href="${user.html_url}" target="_blank">
                    <img src="${user.avatar_url}" width="100" height="100" alt="${user.login}" />
                </a>
            </div>
            <p>Followers: ${user.followers} - Following ${user.following} <br> Repos: ${user.public_repos}</p>
        </div>`; // Count of people following our user, # being followed & # of public repositories 
}

function repoInformationHTML(repos) { // GitHub returns this object as an array. 
    if (repos.length == 0) {          // If length = 0, the array is empty & no repositories for that user    
        return `<div class="clearfix repo-list">No Repos!</div>`;
    }
    
    var listItemsHTML = repos.map(function(repo) {
        return `<div>
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>`;
    });
        return `<div class="p-0 container-fluid">
                    <div class="clearfix repo-list">
                    <p class="light-tag dark-tag">
                        Repo list:   
                    </p>
                    <p class="dark-tag">
                        <small>(repo's not shown can be accessed in <b>GitHub</b>)</small>
                    </p>
                    <div class="repo-block" id="gh-repo-data">
                        ${listItemsHTML.join("------")}
                    </div>
                    </div>
                </div>`;
}

function fetchGitHubInformation(event) {
    $("#gh-user-data").html(""); // Bug Fix - Effect of emptying <div>
    $("#gh-repo-data").html("");

    var username = $("#gh-username").val(); //jQuery used to select 'gh-username'& a value in the text field
    if (!username) { // if no username present / blank, then request for user to enter a GitHub username                         
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;  // return statement added to save on accessing GitHub API, if we have a blank entry
    }
    

    $("#gh-user-data").html( /* if animated gif image cannot be displayed, then show "loading..." text */
        `<div class="lds-ellipsis" alt="loading..." /><div></div><div></div><div></div><div></div></div>`);
        
    $.when(
        $.getJSON(`https://api.github.com/users/${username}`),
        $.getJSON(`https://api.github.com/users/${username}/repos`)
    ).then(
        function(firstResponse, secondResponse) {
            var userData = firstResponse[0];
            var repoData = secondResponse[0];
            $("#gh-user-data").html(userInformationHTML(userData));
            $("#gh-repo-data").html(repoInformationHTML(repoData));
        },
        function(errorResponse) {  /* if message does not work out, then error response message created*/
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(
                    `<h2>No info found for user ${username}</h2>`);
            } else if (errorResponse.status === 403) {
                var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000); // Data presented in a UNIX time stamp, hwnce ned to multiply by 1000
                $("gh.user-data").html(`<h4>Too many requests, please wait until ${resetTime.toLocaleTimeString()}</h4>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
});
}

$(document).ready(fetchGitHubInformation);