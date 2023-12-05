const bfood = document.getElementById("bfood");
const btoys = document.getElementById("btoys");
const bclothes = document.getElementById("bcloses");
let boolFood = false;
let boolToys = false;
let boolCloses = false;
let fo;
let to;
let co;
const ulfood = document.getElementById("food");
const ultoys = document.getElementById("toys");
const ulcloses = document.getElementById("closes");

bfood.onclick = () => {
    if (!boolFood) {
        boolFood = true;
        checkVariables();

        console.log(" hjb");
        fetch('./data/food.json', {})
            .then((response) => response.json())
            .then((jsonObject) => {
                fo=jsonObject;
                createList(jsonObject, ulfood);
            })
            .catch((error) => {
                alert("The routing is wrong");
                document.write(error);
            });
    }
   createList(fo, ulfood);
};





btoys.onclick = () => {
    if (!boolToys) {
        boolToys = true;
      
        checkVariables();
        fetch('./data/toys.json', {})
            .then((response) => {
                return response.json();
            })
            .then((jsonObject) => {
                to=jsonObject;
                createList(jsonObject, ultoys);

            })
            .catch((error) => {
                alert("הניתוב שגוי")
                document.write(error);
            });
    }
    createList(to, ultoys);
};


bclothes.onclick = () => {
    if (!boolCloses) {
        boolCloses = true;
        checkVariables();
        

        fetch('./data/closes.json', {})
            .then((response) => {
                return response.json();
            })
            .then((jsonObject) => {
                co=jsonObject;
                createList(jsonObject, ulcloses);
            })

            .catch((error) => {
                alert("הניתוב שגוי")
                document.write(error);
            })

    }
    
    createList(co,ulcloses);
};


function createList(jsonObject,ul) {
    ultoys.innerHTML = "";
    ulcloses.innerHTML = "";
    ulfood.innerHTML = "";
    jsonObject.forEach(item => {
        ul.innerHTML += "<li>"+item.name + " " + item.id + " "+"</li>"
    });

}
function sleep() {
    return new Promise((resolve) => {
      setTimeout(resolve,10000);
    });
  }
  function checkVariables() {
    if (boolCloses && boolFood && boolToys) {
      alert('All windows opened successfully');
      
        } else {
      sleep().then(() => {
    });
    }
  }
  
 



