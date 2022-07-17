class Uİ {
    constructor() {
      
    }


    addUsersUI(data,list) {

        data.forEach(user => {
            const li = document.createElement("li");

            li.innerHTML =
                `
                     <div class="item">
                        <img src="${user.picture.medium}" alt="">
                        <div>
                            <h3>${user.name.first} ${user.name.last}</h3>
                            <h6>${user.location.city} ${user.location.state}</h6>
                        </div>
                    </div>

                `
            list.appendChild(li);

        });


    }
}