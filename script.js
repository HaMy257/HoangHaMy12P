function login()
{
  let a = username.value
  let b = password.value
  if (a == "HoangHaMy" && b == "25072007")
  {
    window.open("Home.html");
    document.getElememtById("compiler").style.display="block";
  }
  else
    document.write("không hợp lệ")
}
