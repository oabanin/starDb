class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, 
            received ${res.status}`)
        }
        return await res.json();

    }

        async getAllPeople(){
        const res = this.getResource(`/people/`);
        console.log(res.results);
        return res.results;
    }

    async getPerson(id){
        return this.getResource(`/people/${id}`);
    }


}

const swapi = new SwapiService();
swapi.getAllPeople().then(console.log)

