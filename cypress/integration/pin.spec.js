/// <reference types="cypress" />

import req from '../support/api/requests'
import assertions from '../support/api/assertions'

context('Ping', () => {
    it('GET HealthCheck - validar que a aplicação está no ar @healtcheck', () => {
        
        //request
        req.getPing().then(getPingResponse => {
            assertions.shouldHaveStatus(getPingResponse, 201)
        })
        //.its('status').should('eq', 201)
        //cy.request => response => body, status , headers
    });
});