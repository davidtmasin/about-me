let descriptionOnPage =
  "I'm a Test Analist on Techway Informática/Hapvida," +
  ' currently living in Fortaleza, Brazil. My interests are Design,' +
  ' Hardware, Programming and Pop Culture News.'

const linksSocialMedia = {
  github: 'davidtmasin',
  linkedin: 'davidteixeirademasin',
  gmail: 'davidteixeira.info@gmail.com',
  twitter: 'davidtmasin'
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const nameOnPage = data.name
      const keywordsOnPage = data.bio
      const photo = data.avatar_url

      nameOwner.textContent = nameOnPage
      keywords.textContent = keywordsOnPage
      imageOwner.style.backgroundImage = `url('${photo}')`

      const userLink = data.html_url
      myGithub.href = userLink
    })
    .then(() => {
      loading.style.visibility = 'hidden'
      container.style.visibility = 'visible'
    })
}

function inputLinkSocialMedia() {
  myGmail.href = `mailto:${linksSocialMedia.gmail}`
  myLinkedin.href = `https://www.linkedin.com/in/${linksSocialMedia.linkedin}`
  myTwitter.href = `https://www.twitter.com/${linksSocialMedia.twitter}`
}

document.getElementById('descriptionForMe').innerText = descriptionOnPage
getGitHubProfileInfos()
inputLinkSocialMedia()
