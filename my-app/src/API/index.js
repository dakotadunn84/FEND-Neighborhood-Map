class Helper {
    static baseURL(){
        return "https://api.foursquare.com/v2"
    }
    static auth(){
        const keys = {
            client_id:"TUIBAJTTBSNWRRQBW5AXBVR3HY4I4ZRVMT4WB31IFWCG2XXU",
            client_secret:"NWHL3S5BYJ13DYNR20SQDXLV5POK2QSIOF5SLBQJDCM23H2E",
            v:"20181030"
        };
        return Object.keys(keys).map(key => `${key}=${keys[key]}`).join("&");
    }
    static urlBuilder(urlPrams){
        if(!urlPrams){
            return ""
        }
        return Object.keys(urlPrams)
        .map(key => `${key}=${urlPrams[key]}`)
        .join("&")
    }
    static headers () {
        return {
            Accept: "application/json"
        };
    }
    static simpleFetch(endPoint,method,urlPrams){
        let requestData = {
            method,
            headers: Helper.headers()
        };
        return fetch(`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
            urlPrams
        )}`,
        requestData
        ).then(res => res.json());
    }
}
export default class SquareAPI {
    static search(urlPrams){
        return Helper.simpleFetch("/venues/search", "GET", urlPrams);
    }
    static getVenueDetails(VENUE_ID){
        return Helper.simpleFetch(`/venues/${VENUE_ID}`,"GET");
    }
    static getVenuePhotos(VENUE_ID){
        return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`,"GET");
    }
}