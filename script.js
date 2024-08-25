function transformCloudinaryURL(originalURL, width, height, fitType) {
    let parts = originalURL.split("/upload/");
    if (parts.length === 2) {
        let transformedURL = parts[0] + "/upload/w_" + width + ",h_" + height + ",c_" + fitType + "/" + parts[1];
        return transformedURL;
    } else {
        console.error("URL Cloudinary tidak valid.");
        return null;
    }
}


async function load() {
    let data = await fetch('./src/data.json');
    data = await data.json()
    let component = ""
    data.forEach(element => {
        component += `<div class="teman-profile">
        <div class="image">
            <img src="${element.fotoselfie}"
                alt="">
        </div>
        <div class="right-profile">
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
    </div>`
    });

    document.getElementById("container-kanan").innerHTML += component
}

load()