function PengubahNomor(no) {
    if (String(no)[0] == "+") {
        return no
    } else {
        let data = String(no).split('')
        delete (data[0])
        data = "+62" + data.join('')
        return data
    }
}

function cardComponent(element) {
    return `<a class="teman-profile" id="teman-profile" href="https://wa.me/${PengubahNomor(element.no)}" target="_blank"">
    <div class="image">
        <img src="${element.fotoselfie}"
            alt="">
    </div>
    <div class="right-profile" id="${element.nim}">
        <h1>${element.nama}</h1>
        <span>Kelompok ${element.kelompok}</span>
        <div class="bio-next">
            <div class="name">
                <ul>
                    <li>
                        NIM
                    </li>
                    <li>
                        Alamat
                    </li>
                    <li>
                        Tgl Lahir
                    </li>
                </ul>
            </div>
            <div class="field">
                <ul>
                    <li>
                        ${element.nim}
                    </li>
                    <li class="alamat">
                        ${element.alamat}
                    </li>
                    <li>
                        ${element.ttl}
                    </li>
                </ul>
            </div>
        </div>

        <h3 class="telp">${element.no}</h3>
    </div>
    <div class="teman-hover"><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
</a>`
}

const Teman = (no) => {
    window.location.href = `https://wa.me/${no}`
}


let globalData;
function draw(data) {
    let component = ""
    data.forEach(element => {
        component += cardComponent(element);
    });

    document.getElementById("container-kanan").innerHTML += component
}


async function load() {
    let data = await fetch('./src/data.json');
    globalData = await data.json()
    draw(globalData)
}

load()


const form = document.querySelector('form')
form.addEventListener('submit', ev => {
    ev.preventDefault()
    const input = document.getElementById('se');
    document.getElementById("container-kanan").innerHTML = ""
    let component = ` <div class="gap"></div>
    <div class="name-big">
        <h1>Yohanes Oktanio</h1>
        <h3><i class="fa-brands fa-ubuntu"></i> UBUNTU / 5</h3>
    </div>`
    globalData.forEach(element => {

        if (String(element.nama).toLowerCase().includes(input.value.toLowerCase())) {
            component += cardComponent(element)
        }
    })
    document.getElementById("container-kanan").innerHTML += component
    document.getElementById("container-kanan").focus()
    document.getElementById("container-kanan").scrollIntoView()
})



