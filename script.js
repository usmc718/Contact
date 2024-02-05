class Contact {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}

function addContact() {
    if (contacts.length < maxContacts) {
        let name = prompt("Enter the contact's name:");
        let address = prompt("Enter the contact's address:");
        let phone = prompt("Enter the contact's phone number:");

        let contact = new Contact(name, address, phone);
        contacts.push(contact);
    } else {
        console.log("Maximum number of contacts reached.");
    }
}

function displayContacts() {
    console.log("Contacts:");
    contacts.forEach(contact => {
        console.log(`Name: ${contact.name}, Address: ${contact.address}, Phone: ${contact.phone}`);
    });
}

// Main program
const maxContacts = 10;
let contacts = [];

do {
    addContact();
    var addMore = confirm("Do you want to add another contact?");
} while (addMore && contacts.length < maxContacts);

// Sort contacts by name
contacts.sort((a, b) => a.name.localeCompare(b.name));

// Display sorted contacts
displayContacts();
