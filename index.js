function unlock()
{
    let password = prompt("Please enter the password (replace underscores with the words keep hyphens):", "_-_-_-_");
    if (password == "Cutie-Pie-Grace-Mokal") {
        window.location.href = 'unlock.html'
      } else {
        alert("wrong! you suck")
      }
}
