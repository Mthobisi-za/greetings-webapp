module.exports = function businessLogic() {
    var records = [] 
  var userName;
  var userLang;
  var count = 0;
  //updated user values

  function setUserNameAndLang(data) {
        function userFix() {
                var num = records.indexOf(data.name); 
                if(num == -1){
                    count = count + 1;
                    userName = data.name;
                    records.push(userName)
                }  else{
                    userName = data.name;
                }
        } 
        userFix();
        function langFix(){
                if (data.Group == "English") {
                return (userLang = "Hello");
                } else if (data.Group == "Sesotho") {
                return (userLang == "Dumela");
                } else if (data.Group == "Isizulu") {
                return (userLang = "Sawbona");
                } else {
                return ""
                }
        }
        langFix()
  }

  function getData() {
    return {
      userLang,
      userName,
      count,
    };
  }

  return {
    setUserNameAndLang,
    getData,
  };
};
