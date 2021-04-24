/// <reference types="cypress" />

import spok from 'cy-spok'
import req from '../support/api/requests'
import schemas from '../support/api/schemas'
import assertions from '../support/api/assertions'

context('Booking', () => {
    before(() => {
        req.doAuth()
    });
    it('Validar o contrato do GET Booking @contract', () => {

        req.getBooking().then(getBookingResponse => {
            assertions.validateContractOf(getBookingResponse,schemas.getBookingSchema())
        })
        
    })
    it('Criar uma reserva com sucesso @functional', () => {
      req.postBooking().then(postBookingResponse => {
          assertions.shouldHaveStatus(postBookingResponse, 200)
          assertions.shouldbookingIdBePresent(postBookingResponse)
          assertions.shouldHaveDefaultHeaders(postBookingResponse)
          assertions.shouldHaveContentTypeAppJson(postBookingResponse)
          assertions.shouldDurationBeFast(postBookingResponse)
        })
        
    });

    it('Tentar alterar uma reserva sem o token @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateBookingWithoutToken(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
                assertions.shouldHaveContentTypeAppJson(postBookingResponse)
        })
        })
        
    });

    it('Tentar alterar uma reserva com token invalido @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateBookingWithInvalidToken(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
                assertions.shouldHaveContentTypeAppJson(postBookingResponse)
        })
        })
        
    });

    it('Tentar alterar uma reserva inexistente @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateBookingWithInvalidToken(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
                assertions.shouldHaveContentTypeAppJson(postBookingResponse)
        })
        })
        
    });

    it('Alterar uma reserva com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateBooking(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 200)
                assertions.shouldbookingIdBePresent(postBookingResponse)
        })
        })
    });

    it('Tentar alterar uma reserva inexistente @functional', () => {
        req.updateNonExistentBooking().then(putBookingResponse => {
            assertions.shouldHaveStatus(putBookingResponse, 405)
        })
});

    it('Excluir uma reserva com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.deleteBooking(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 201)
            })
        })
    });

    it('Tentar excluir uma reserva com token invalido @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.deleteBookingWithInvalidToken(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 403)
            })
        })
    });
    it('Tentar excluir uma reserva sem token @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.deleteBookingWithoutToken(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 403)
            })
        })
    });

    it('Tentar excluir uma reserva inexistente @functional', () => {
            req.deleteNonExistentBooking().then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 405)
            })
    });

    it('Listar reservas @functional', () => {
       req.getBookingList().then(response => {
           assertions.shouldHaveStatus(response, 200)
       })
        
    });

    it('Listar reservas com o primeiro nome Jim @functional', () => {
        req.getBookingForNameJim().then(response => {
            assertions.shouldHaveStatus(response, 200)
        })
         
     });
 

});

