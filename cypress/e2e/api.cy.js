import kambiRestApiGameLauncher2 from "../fixtures/kambiRestApiGameLauncher2.json"
import sportsBookFeeds from "../fixtures/sportsbook-feedsViewsSportsA-Z.json"

describe('API tests', () => {
    Array.from(kambiRestApiGameLauncher2).forEach(data => {
            it('should check code - response - schema ' + data.url, () => {
                let params = generateUrlParams(data.params);
                cy.request(data.url + params)
                    .as('request');
                cy.get('@request').then(response => {
                    expect(response.status).to.eq(data.responseCode);
                    checkResponse(data.responseData, response.body)
                    expect(response.body).to.be.jsonSchema(data.schema);
                });
            })
        }
    )

    Array.from(sportsBookFeeds).forEach(data => {
            it('should check that sports attributes complies with requirements ' + data.url, () => {
                cy.request(data.url)
                    .as('request');
                cy.get('@request').then(response => {
                    expect(response.status).to.eq(data.responseCode);
                    response.body.layout.sections.forEach((section) => {
                        if (section.position === "MAIN") {
                            section.widgets[0].sports.forEach((sport) => {
                                expect(sport.boCount).to.match(new RegExp(/^\d*$/))
                                expect(sport.iconUrl).to.match(new RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*).svg$/))
                                expect(sport.name).to.match(new RegExp(/^[a-zA-Z0-9 ]*$/));
                            })
                        }
                    })
                });
            })
        }
    )
})

function generateUrlParams(params) {
    let generated = '?';
    for (let paramsKey in params) {
        generated += paramsKey + '=' + params[paramsKey] + '&'
    }
    return generated;
}

function checkResponse(expected, actual) {
    for (let expect in expected) {
        assert.equal(actual[expect], expected[expect], expect + " data should match actual= " + actual[expect] + " expected= " + expected[expect])
    }
}
