class Requests {

    //verboRecurso

    getPing() {
        return cy.request({
        method: 'GET',
        url: 'ping'
        })
    }

    getBooking() {
        return cy.request({
            method: 'GET',
            url: 'booking/18',
        })
    }
    
    postBooking() {
        return   cy.request({
            method: 'POST',
            url: 'booking',
            body: { 
                "firstname": "Eric",
                "lastname": "Wilson",
                "totalprice": 470,
                "depositpaid": true,
                "bookingdates": {
                  "checkin": "2016-10-28",
                  "checkout": "2018-02-04"
                },
                "additionalneeds": "Breakfast"
            }
        })
    }

    updateBookingWithoutToken(response) {
        const id = response.body.bookingid

           return  cy.request({
                method: 'PUT',
                url: `booking/${id}`,
                body: 
                    {
                        "firstname": "Jim",
                        "lastname": "James",
                        "totalprice": 111,
                        "depositpaid": true,
                        "bookingdates": {
                          "checkin": "2020-01-01",
                          "checkout": "2020-01-02"
                        },
                        "additionalneeds": "Lunch"
                    },
                    failOnStatusCode: false
            })
    }

    updateBookingWithInvalidToken(response) {
        const id = response.body.bookingid

           return  cy.request({
                method: 'PUT',
                url: `booking/${id}`,
                headers: {
                    Cookie: 'token=123456'

                },
                body: 
                    {
                        "firstname": "Jim",
                        "lastname": "James",
                        "totalprice": 111,
                        "depositpaid": true,
                        "bookingdates": {
                          "checkin": "2020-01-01",
                          "checkout": "2020-01-02"
                        },
                        "additionalneeds": "Lunch"
                    },
                    failOnStatusCode: false
            })
    }

    updateBooking(response) {
        const id = response.body.bookingid

           return  cy.request({
                method: 'PUT',
                url: `booking/${id}`,
                headers: {
                    Cookie: `token=${Cypress.env('token')}`

                },
                body: 
                    {
                        "firstname": "Jim",
                        "lastname": "James",
                        "totalprice": 111,
                        "depositpaid": true,
                        "bookingdates": {
                          "checkin": "2020-01-01",
                          "checkout": "2020-01-02"
                        },
                        "additionalneeds": "Lunch"
                    },
                    failOnStatusCode: false
            })
    }
    updateNonExistentBooking(response) {

        return cy.request({
            method: 'PUT',
            url: 'booking/123456',
            headers: { 
                Cookie: `token=${Cypress.env('token')}`
             },
            body: 
                 {
                     "firstname": "Elvercio",
                     "lastname": "James",
                     "totalprice": 111,
                     "depositpaid": true,
                     "bookingdates": {
                         "checkin": "2020-01-01",
                         "checkout": "2020-01-02"
                     },
                     "additionalneeds": "Lunch"
                 },
            failOnStatusCode: false
        });
    }

    postAuth(){
        return cy.request({
            method: 'POST',
            url: 'auth',
            body: {
                "username" : "admin",
                "password" : "password123"
            }
        })
    }
    
    doAuth(){
        this.postAuth().then(authResponse => {
            const token = authResponse.body.token;

            Cypress.env('token', token)
        })
    }

    deleteBooking(response) {

        const id = response.body.bookingid

        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            headers: { 
                Cookie: `token=${Cypress.env('token')}`
             },
             failOnStatusCode: false
        });
    }
    deleteBookingWithInvalidToken(response) {

        const id = response.body.bookingid

        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            headers: { 
                Cookie: 'token=123456'
             },
             failOnStatusCode: false
        });
    }
    deleteBookingWithoutToken(response) {

        const id = response.body.bookingid

        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            failOnStatusCode: false
        });
    }
    deleteNonExistentBooking(response) {

        //const id = response.body.bookingid

        return cy.request({
            method: 'DELETE',
            url: 'booking/123456',
            headers: { 
                Cookie: `token=${Cypress.env('token')}`
             },
            failOnStatusCode: false
        });
    }
    getBookingList(response) {
        return cy.request({
            method: 'GET',
            url: 'booking',
        })
    }
    getBookingForNameJim(response) {
        return cy.request({
            method: 'GET',
            url: 'booking?firstname=Jim'
        })
    }
}

export default new Requests();