class KonyvModel {
    #konyvekTomb = [];

    constructor(token) {
        this.token = token;
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((konyv) => {
                // console.log('Success:', data);
                this.#konyvekTomb = konyv;
                // console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatUj(vegpont, adat) {
        fetch(vegpont, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.token
            },
            body: JSON.stringify(adat)
        })
            .then((response) => response.json())
            .then((konyv) => {
                console.log("Új adat: "+ konyv);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatModosit(vegpont, adat) {
        console.log("Módosít: "+ vegpont);
        fetch(vegpont, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.token
            },
            body: JSON.stringify(adat)
        })
            .then((response) => response.json())
            .then((konyv) => {
                console.log("MÓDOSÍTOTTAM: "+ konyv);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatTorol(vegpont, adat) {
        console.log("TÖRÖLT: "+ vegpont);
        vegpont += "/" + adat.id
        fetch(vegpont, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': this.token
            },
        })
            .then((response) => response.json())
            .then((konyv) => {
                console.log("TÖRÖLTEM: "+ konyv)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
       
    }
    // konyvVesz(adat) {
    //     console.log("Vettem: "+adat)
    // }
}

export default KonyvModel;