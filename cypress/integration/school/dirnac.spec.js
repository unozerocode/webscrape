/// <reference types="cypress" />
const getIframeDocument = () => {
  return cy
  .get('iframe[name="iFrame"]')
  // Cypress yields jQuery element, which has the real
  // DOM element under property "0".
  // From the real DOM iframe element we can get
  // the "document" element, it is stored in "contentDocument" property
  // Cypress "its" command can access deep properties using dot notation
  // https://on.cypress.io/its
  .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  // automatically retries until body is loaded
  .its('body').should('not.be.undefined')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  .then(cy.wrap)
}



context('DirectorioNacional', () => {
  beforeEach(() => {
    
  })

  it('Oaxaca', () => {
    cy.visit('http://www.anuies.mx/html/diries/index.php')
    cy.get(':nth-child(2) > a').click()  // Consulta Avanzada
    cy.log("Looking for selecct")
    // Entidad
    let sel = getIframeBody().find('select[name="ent_fed_inst"]')
    sel.should("not.be.undefined")
    cy.log("Retrieved selector")
   
    cy.log("clicking on select")
   // sel = cy.wrap(getIframeBody().find('select[name="ent_fed_inst"]'))

    getIframeBody().find('select[name="ent_fed_inst"]').select("Oaxaca")
  })

/*
<font size=3><tr><th align=left>Entidad:</th><td colspan=1 width=80>
<select name=ent_fed_inst>
<option value=0>Todas
<option value=1>Aguascalientes
<option value=2>Baja California
<option value=3>Baja California Sur
<option value=4>Campeche
<option value=5>Chiapas
<option value=6>Chihuahua
<option value=9>Ciudad de México
<option value=7>Coahuila
<option value=8>Colima
<option value=10>Durango
<option value=11>Guanajuato
<option value=12>Guerrero
<option value=13>Hidalgo
<option value=14>Jalisco
<option value=15>México
<option value=16>Michoacán
<option value=17>Morelos
<option value=18>Nayarit
<option value=19>Nuevo León
<option value=20>Oaxaca
<option value=21>Puebla
<option value=22>Querétaro
<option value=23>Quintana Roo
<option value=24>San Luis Potosí
<option value=25>Sinaloa
<option value=26>Sonora
<option value=27>Tabasco
<option value=28>Tamaulipas
<option value=29>Tlaxcala
<option value=30>Veracruz
<option value=31>Yucatán
<option value=32>Zacatecas
</select>
*/
  
})
