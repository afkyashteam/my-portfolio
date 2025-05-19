fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME")
  .then(res => res.json())
  .then(data => {
    document.getElementById("github-followers").innerText = data.followers;
  })
  .catch(err => {
    document.getElementById("github-followers").innerText = "Unavailable";
  });
