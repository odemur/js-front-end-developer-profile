
async function fetchProfileData() {
    const url = 'https://github.com/odemur/js-front-end-developer-profile/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
