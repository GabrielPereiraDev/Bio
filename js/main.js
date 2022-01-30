const linksSocialMedia = {
    github: "GabrielPereiraDev",
    youtube: "channel/UC0_KXWvqsHSWQaRd-356evw",
    facebook: "profile.php?id=100066717877945",
    instagram: "gabrielpereira.dev",
    twitter: "DevG4briel"
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
            li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userLogin.textContent = data.login
        userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()