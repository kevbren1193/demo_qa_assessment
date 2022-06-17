/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class BasePage {

    get mainHeader() {
        return cy.get(".main-header");
    }

    get booksTable() {
        return cy.get(".ReactTable")
    }

    get modalDelete(){
        return cy.get(".modal-content");
    }

    get acceptDeleteButton(){
        return cy.get("#closeSmallModal-ok");
    }


    bookTableTitle(title){
        return cy.get(`.rt-tbody .rt-td a:contains("${title}")`)
    }

    clickRemoveButton(title){
        cy.get('.rt-tbody .rt-td a').each(($ele, index) => {
            if ($ele.text().includes(title)) {
                cy.log(index) //logs the index
                cy.get(`:nth-child(${index+1}) > .rt-tr > .rt-td #delete-record-undefined`).click();
            }
        })

    }

}
